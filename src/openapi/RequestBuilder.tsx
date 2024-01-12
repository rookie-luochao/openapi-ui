import { request } from "@request";
import { Button, Form } from "antd";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { filter, isEmpty, map, values } from "lodash-es";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Dictionary } from "react-router-toolkit";
import { Section } from "../components/Section";
import { useConfigInfoStore, useOpenapiWithServiceInfoStore } from "../core/store";
import { dsc } from "../core/style/defaultStyleConfig";
import { HttpRequestView } from "./HttpRequestView";
import { HttpResponseView } from "./HttpResponseView";
import { RequestParameterInput } from "./RequestParameterInput";
import { patchSchema } from "./patchSchema";
import { isMultipartFormData, setAxiosConfigFromOperation } from "./request";
import { getMockBodyDataBySchema, getMockQueryDataBySchema } from "./requestMock";
import { IMediaType, IOperationEnhance, ISchema, TParameter } from "./type";

function createParametersPicker(parameters: TParameter[]) {
  return (position: string): TParameter[] => filter<TParameter>(parameters, (parameter) => parameter.in === position);
}

function renderParameters(parameters: TParameter[], schemas: Dictionary<ISchema> = {}) {
  return map(parameters, (parameter) => {
    const name = parameter.name;

    return (
      <Form.Item
        key={name}
        name={name}
        rules={parameter.required ? [{ required: true, pattern: (parameter.schema as any)?.pattern }] : undefined}
        style={{ marginBottom: 10 }}
      >
        <RequestParameterInput parameter={parameter} schemas={schemas} />
      </Form.Item>
    );
  });
}

function renderRequestBody(requestBody: any = {}, schemas: Dictionary<ISchema> = {}) {
  return (
    <div key="requestBody">
      {map(requestBody.content, (mediaType: IMediaType, contentType: string) => {
        const schema = mediaType.schema ? patchSchema(mediaType.schema, schemas) : ({} as IMediaType["schema"]);

        return (
          <div key={contentType}>
            {isMultipartFormData(contentType) ? (
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
                <Section title="body">
                  {map((schema || ({} as any)).properties, (propSchema: any, key: string) => {
                    return (
                      <Form.Item key={key} name={key} rules={requestBody.required ? [{ required: true }] : undefined}>
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
                </Section>
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

export function RequestBuilder(props: { operation: IOperationEnhance; schemas: Dictionary<ISchema> }) {
  const { operation, schemas } = props;
  const [form] = Form.useForm();
  const location = useLocation();
  const { openapiWithServiceInfo } = useOpenapiWithServiceInfoStore();
  const { configInfo } = useConfigInfoStore();
  const getRequestByValues = setAxiosConfigFromOperation(operation);
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
  }, [configInfo?.authorization]);

  async function sumbit(axiosConfig: AxiosRequestConfig) {
    setLoading(true);
    const res = await request(axiosConfig).finally(() => setLoading(false));

    if (res.status >= 200 && res.status < 300) {
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
        mockBodyData = getMockBodyDataBySchema(schema, openapiWithServiceInfo?.openapi);
      }
    }

    form.setFieldsValue({
      ...(mockQueryData || {}),
      body: mockBodyData,
    });
    setCount(count + 1);
  }

  return (
    <Form
      form={form}
      name="request-control-form"
      onFinish={() => {
        sumbit(
          Object.assign(
            getRequestByValues({ ...(form.getFieldsValue() || {}) }),
            configInfo?.timeout ? { timeout: configInfo?.timeout * 1000 } : {},
          ),
        );
      }}
      onValuesChange={() => {
        setCount(count + 1);
      }}
    >
      <div css={{ display: "flex", fontSize: dsc.fontSize.xxs }}>
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
          <HttpRequestView css={{ margin: "1em 0" }} request={getRequestByValues(form.getFieldsValue() || {})} />
          <div css={{ margin: "1em 0" }}>
            <Button
              htmlType="submit"
              type="primary"
              size="small"
              disabled={loading}
              style={{ fontSize: dsc.fontSize.xxs }}
            >
              {loading ? "requesting" : "request"}
            </Button>
            <Button
              size="small"
              style={{ fontSize: dsc.fontSize.xxs, marginLeft: 4 }}
              onClick={() => handleMockData(true)}
            >
              mock(required)
            </Button>
            <Button
              size="small"
              style={{ fontSize: dsc.fontSize.xxs, marginLeft: 4 }}
              onClick={() => handleMockData(false)}
            >
              mock(all)
            </Button>
          </div>
          {!isEmpty(axiosResponse) && <HttpResponseView {...axiosResponse} />}
        </div>
      </div>
    </Form>
  );
}
