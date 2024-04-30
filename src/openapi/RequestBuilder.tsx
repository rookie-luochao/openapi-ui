import { useTheme } from "@emotion/react";
import { request } from "@request";
import { Button, Form, Popover } from "antd";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { filter, isEmpty, map, values } from "lodash-es";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Dictionary } from "react-router-toolkit";
import { CreateCURL } from "../components/curl";
import { CreateGenerateCode } from "../components/generate-code";
import { useConfigInfoStore, useOpenapiWithServiceInfoStore } from "../core/store";
import { ITheme, dsc } from "../core/style/defaultStyleConfig";
import { HttpRequestView } from "./HttpRequestView";
import { HttpResponseView } from "./HttpResponseView";
import { RequestParameterInput } from "./RequestParameterInput";
import { patchSchema } from "./patchSchema";
import { isFormURLEncoded, isMultipartFormData, setAxiosConfigFromOperation } from "./request";
import { getMockBodyDataBySchema, getMockQueryDataBySchema } from "./requestMock";
import { IMediaType, IOperationEnhance, IRequestBody, ISchema, TParameter } from "./type";
import { getRequestBodyContent } from "./util";

function createParametersPicker(parameters: TParameter[]) {
  return (position: string): TParameter[] => filter<TParameter>(parameters, (parameter) => parameter.in === position);
}

function renderParameters(parameters: TParameter[], schemas: Dictionary<ISchema> = {}) {
  return map(parameters, (parameter) => {
    const name = parameter.name;
    const pattern = (parameter.schema as ISchema)?.pattern;

    return (
      <Form.Item
        key={name}
        name={name}
        rules={
          parameter.required
            ? [pattern ? { required: true, pattern: pattern as unknown as RegExp } : { required: true }]
            : undefined
        }
        style={{ marginBottom: 10 }}
      >
        <RequestParameterInput parameter={parameter} schemas={schemas} />
      </Form.Item>
    );
  });
}

function RenderRequestBody({ requestBody, schemas = {} }: { requestBody: IRequestBody; schemas: Dictionary<ISchema> }) {
  const theme = useTheme() as ITheme;
  const content = getRequestBodyContent(requestBody);

  return (
    <div key="requestBody">
      {map(content, (mediaType: IMediaType, contentType: string) => {
        const schema = mediaType.schema
          ? patchSchema<ISchema>(mediaType.schema, schemas)
          : ({} as IMediaType["schema"]);

        return (
          <div key={contentType}>
            {isMultipartFormData(contentType) || isFormURLEncoded(contentType) ? (
              <div
                style={{
                  color: theme.color.title,
                  backgroundColor: theme.color.descCardBg,
                  padding: 6,
                  borderRadius: 6,
                }}
              >
                <div
                  style={{
                    padding: "6px 0",
                  }}
                >
                  {contentType}
                </div>
                <div style={{ height: 1, backgroundColor: theme.color.border, marginBottom: 10 }} />
                {map((schema || ({} as any)).properties, (propSchema: any, key: string) => {
                  return (
                    <Form.Item key={key} name={key}>
                      <RequestParameterInput
                        parameter={
                          {
                            in: "formData",
                            name: key,
                            schema: propSchema,
                            required: requestBody.required,
                          } as any
                        }
                        schemas={schemas}
                      />
                    </Form.Item>
                  );
                })}
              </div>
            ) : (
              <Form.Item name="body" rules={requestBody.required ? [{ required: true }] : undefined}>
                <RequestParameterInput
                  parameter={
                    {
                      in: "body",
                      name: contentType,
                      schema,
                      required: requestBody.required,
                    } as any
                  }
                  schemas={schemas}
                />
              </Form.Item>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function RequestBuilder(props: { operation: IOperationEnhance; schemas: Dictionary<ISchema> }) {
  const { operation, schemas } = props;
  const [form] = Form.useForm();
  const location = useLocation();
  const { openapiWithServiceInfo } = useOpenapiWithServiceInfoStore();
  const { configInfo } = useConfigInfoStore();
  const { t } = useTranslation();
  const getRequestByValues = setAxiosConfigFromOperation(operation, (openapiWithServiceInfo || ({} as any))?.openapi);
  const pickParametersBy = createParametersPicker(operation.parameters || ([] as any));
  const [axiosResponse, setAxiosResponse] = useState({} as AxiosResponse);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0); // hack for sync request-view

  useEffect(() => {
    form.resetFields();
    setAxiosResponse({} as AxiosResponse);
  }, [location.pathname]);

  useEffect(() => {
    form.setFieldValue("Authorization", configInfo?.authorization || "");
    form.setFieldValue("authorization", configInfo?.authorization || "");
    setCount((count) => count + 1);
  }, [configInfo?.authorization]);

  async function sumbit(axiosRequest: AxiosRequestConfig) {
    setLoading(true);
    const res = await request(axiosRequest).finally(() => setLoading(false));

    if (res?.status >= 200 && res?.status < 300) {
      setAxiosResponse(res);
    }

    setLoading(false);
  }

  function handleMockData(isRequired?: boolean) {
    let mockQueryData;
    let mockBodyData;

    if (operation.parameters) {
      mockQueryData = getMockQueryDataBySchema(operation.parameters as TParameter[], isRequired);
    }

    if (operation.requestBody) {
      const schema = values(operation.requestBody.content)?.[0]?.schema;

      if (schema) {
        mockBodyData = getMockBodyDataBySchema(schema, openapiWithServiceInfo?.openapi, isRequired);
      }
    }

    form.setFieldsValue({
      ...(mockQueryData || {}),
      body: isEmpty(mockBodyData) ? undefined : mockBodyData, // this is antd form setFieldsValue hack
    });
    setCount(count + 1);
  }

  return (
    <Form
      form={form}
      name="request-control-form"
      initialValues={{ Authorization: configInfo?.authorization, authorization: configInfo?.authorization }}
      onValuesChange={() => {
        setCount(count + 1);
      }}
      onFinish={() => sumbit(getRequestByValues(form.getFieldsValue()))}
    >
      <div style={{ display: "flex", fontSize: dsc.fontSize.xs }}>
        <div style={{ width: "50%", paddingRight: 12 }}>
          {renderParameters(pickParametersBy("path") as TParameter[], schemas)}
          {renderParameters(pickParametersBy("header") as TParameter[], schemas)}
          {renderParameters(pickParametersBy("query") as TParameter[], schemas)}
          {renderParameters(pickParametersBy("cookie") as TParameter[], schemas)}
          {operation.requestBody && <RenderRequestBody requestBody={operation.requestBody} schemas={schemas} />}
        </div>
        <div
          style={{
            width: "50%",
            paddingLeft: 12,
          }}
        >
          <HttpRequestView request={getRequestByValues(form.getFieldsValue())} />
          <div css={{ margin: "1em 0", "& > *": { marginRight: 4 } }}>
            <Button htmlType="submit" type="primary" size="small" disabled={loading}>
              {loading ? t("openapi.requesting") : t("openapi.request")}
            </Button>
            <Button size="small" onClick={() => handleMockData(true)}>
              {t("openapi.mockRequired")}
            </Button>
            <Button size="small" onClick={() => handleMockData(false)}>
              {t("openapi.mockAll")}
            </Button>
            <Popover content={<CreateCURL request={getRequestByValues(form.getFieldsValue())} />} trigger="click">
              <Button size="small">{t("openapi.cURL")}</Button>
            </Popover>
            <Popover
              content={<CreateGenerateCode request={getRequestByValues(form.getFieldsValue())} />}
              trigger="click"
            >
              <Button size="small">{t("openapi.generateCode")}</Button>
            </Popover>
          </div>
          {!isEmpty(axiosResponse) && <HttpResponseView {...axiosResponse} />}
        </div>
      </div>
    </Form>
  );
}
