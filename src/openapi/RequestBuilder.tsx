import { request } from "@request";
import { Button, Form, Popover, Radio, message } from "antd";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import copy from "copy-to-clipboard";
import { filter, isEmpty, map, values } from "lodash-es";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Dictionary } from "react-router-toolkit";
import { useConfigInfoStore, useOpenapiWithServiceInfoStore } from "../core/store";
import { dsc } from "../core/style/defaultStyleConfig";
import { HttpRequestView, httpCardWrapStyle } from "./HttpRequestView";
import { HttpResponseView } from "./HttpResponseView";
import { RequestParameterInput } from "./RequestParameterInput";
import { generateCURL } from "./generateCURL.ts";
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
    const pattern = (parameter.schema as any)?.pattern;

    return (
      <Form.Item
        key={name}
        name={name}
        rules={parameter.required ? [pattern ? { required: true, pattern: pattern } : { required: true }] : undefined}
        style={{ marginBottom: 10 }}
      >
        <RequestParameterInput parameter={parameter} schemas={schemas} />
      </Form.Item>
    );
  });
}

function renderRequestBody(requestBody: IRequestBody, schemas: Dictionary<ISchema> = {}) {
  const content = getRequestBodyContent(requestBody);

  return (
    <div key="requestBody">
      {map(content, (mediaType: IMediaType, contentType: string) => {
        const schema = mediaType.schema ? patchSchema(mediaType.schema, schemas) : ({} as IMediaType["schema"]);

        return (
          <div key={contentType}>
            {isMultipartFormData(contentType) || isFormURLEncoded(contentType) ? (
              <div
                css={{
                  backgroundColor: dsc.color.bg,
                  padding: 6,
                  borderRadius: 6,
                }}
              >
                <div
                  css={{
                    padding: "6px 0",
                  }}
                >
                  {contentType}
                </div>
                <div css={{ height: 1, backgroundColor: dsc.color.border, marginBottom: 10 }} />
                {map((schema || ({} as any)).properties, (propSchema: any, key: string) => {
                  return (
                    <Form.Item key={key} name={key}>
                      <RequestParameterInput
                        parameter={
                          {
                            in: "formData",
                            name: key,
                            schema: propSchema,
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

export function CreateCURL({ request }: { request: AxiosRequestConfig }) {
  const { t } = useTranslation();
  const cURL = generateCURL(request);

  return (
    <div>
      <div>
        <Button
          type="primary"
          size="small"
          style={{ fontSize: dsc.fontSize.xxs }}
          onClick={() => {
            copy(cURL);
            message.success(t("openapi.copySuccess"));
          }}
        >
          {t("openapi.copy")}
        </Button>
      </div>
      <pre css={[{ width: 772, fontSize: dsc.fontSize.xs }, httpCardWrapStyle]}>{cURL}</pre>
    </div>
  );
}

export function CreateAxios({ request }: { request: AxiosRequestConfig }) {
  const { t } = useTranslation();
  const { method, url, headers, params, data } = request;
  const template = `  import axios from "axios";

  const config = {
    method: "${method}",
    url: "${url}",
    headers: ${JSON.stringify(headers)},
    ${params ? "params: " + JSON.stringify(params) : "params: null"},
    ${data ? "data: " + JSON.stringify(data) : "data: null"},
  };

  axios(config).then((response)=>{
    console.log(JSON.stringify(response.data));
  }).catch((error)=>{
    console.log(error);
  });`;

  return (
    <div>
      <div css={{ display: "flex", justifyContent: "space-between" }}>
        <Radio.Group defaultValue="axios" size="small">
          <Radio.Button value="axios">javaScript</Radio.Button>
          {/* <Radio.Button value="python">python</Radio.Button> */}
        </Radio.Group>
        <Button
          type="primary"
          size="small"
          style={{ fontSize: dsc.fontSize.xxs }}
          onClick={() => {
            copy(template);
            message.success(t("openapi.copySuccess"));
          }}
        >
          {t("openapi.copy")}
        </Button>
      </div>
      <pre css={[{ width: 772, fontSize: dsc.fontSize.xs }, httpCardWrapStyle]}>{template}</pre>
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
      <div css={{ display: "flex", fontSize: dsc.fontSize.xs }}>
        <div css={{ flex: 1, maxWidth: "50%" }}>
          {renderParameters(pickParametersBy("path") as any, schemas)}
          {renderParameters(pickParametersBy("header") as any, schemas)}
          {renderParameters(pickParametersBy("query") as any, schemas)}
          {renderParameters(pickParametersBy("cookie") as any, schemas)}
          {operation.requestBody && renderRequestBody(operation.requestBody, schemas)}
        </div>
        <div
          css={{
            flex: 1,
            maxWidth: "50%",
            marginLeft: "2em",
          }}
        >
          <HttpRequestView css={{ margin: "1em 0" }} request={getRequestByValues(form.getFieldsValue())} />
          <div css={{ margin: "1em 0", "& > *": { marginRight: 4 } }}>
            <Button
              htmlType="submit"
              type="primary"
              size="small"
              style={{ fontSize: dsc.fontSize.xxs }}
              disabled={loading}
            >
              {loading ? t("openapi.requesting") : t("openapi.request")}
            </Button>
            <Button size="small" style={{ fontSize: dsc.fontSize.xxs }} onClick={() => handleMockData(true)}>
              {t("openapi.mockRequired")}
            </Button>
            <Button size="small" style={{ fontSize: dsc.fontSize.xxs }} onClick={() => handleMockData(false)}>
              {t("openapi.mockAll")}
            </Button>
            <Popover content={<CreateCURL request={getRequestByValues(form.getFieldsValue())} />} trigger="click">
              <Button size="small" style={{ fontSize: dsc.fontSize.xxs }}>
                {t("openapi.cURL")}
              </Button>
            </Popover>
            <Popover content={<CreateAxios request={getRequestByValues(form.getFieldsValue())} />} trigger="click">
              <Button size="small" style={{ fontSize: dsc.fontSize.xxs }}>
                {t("openapi.generateCode")}
              </Button>
            </Popover>
          </div>
          {!isEmpty(axiosResponse) && <HttpResponseView {...axiosResponse} />}
        </div>
      </div>
    </Form>
  );
}
