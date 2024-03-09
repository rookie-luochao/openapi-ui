import { request } from "@request";
import { Button, Form, Input, Popover, Select, Tabs, TabsProps, message } from "antd";
import { AxiosHeaders, AxiosRequestConfig, AxiosResponse } from "axios";
import { isEmpty, map, toUpper } from "lodash-es";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { urlRegex } from "../core/regex";
import { useConfigInfoStore } from "../core/store";
import { dsc } from "../core/style/defaultStyleConfig";
import { HttpRequestView } from "../openapi/HttpRequestView";
import { HttpResponseView } from "../openapi/HttpResponseView";
import { CreateCURL } from "../openapi/RequestBuilder";
import { parameterPositionMap } from "../openapi/config";
import { MethodType } from "../openapi/type";
import { DefineFormField } from "./DefineFormField";
import { RequestBodyInput, RequestHeaderInput, RequestParameterInput } from "./RequestInput";
import { getRequestByValues } from "./request";
import { getCustomFiles, getCustomTimes } from "./utils";

interface IRequest {
  headers?: AxiosHeaders;
  params?: AxiosRequestConfig["params"];
  data?: AxiosRequestConfig["data"];
}

const FormItem = Form.Item<IRequest>;

export function RequestBuilder() {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const { configInfo } = useConfigInfoStore();
  const [axiosResponse, setAxiosResponse] = useState({} as AxiosResponse);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0); // hack for sync request-view
  const [method, setMethod] = useState(MethodType.get);
  const [url, setUrl] = useState("");

  useEffect(() => {
    form.setFieldValue(
      "headers",
      Object.assign({}, form.getFieldValue("headers") || {}, { Authorization: configInfo?.authorization }),
    );
    setCount((count) => count + 1);
  }, [configInfo?.authorization]);

  const items: TabsProps["items"] = [
    {
      key: "0",
      label: parameterPositionMap.header,
      children: (
        <FormItem name="headers">
          <RequestHeaderInput />
        </FormItem>
      ),
    },
    {
      key: "1",
      label: parameterPositionMap.query,
      children: (
        <div>
          <FormItem name="params" style={{ marginBottom: 6 }}>
            <RequestParameterInput />
          </FormItem>
          <DefineFormField position="Params" form={form} />
        </div>
      ),
    },
    {
      key: "2",
      label: parameterPositionMap.body,
      children: (
        <div>
          <FormItem name="data" style={{ marginBottom: 6 }}>
            <RequestBodyInput />
          </FormItem>
          <DefineFormField position="Data" form={form} />
        </div>
      ),
    },
  ];

  const methodOptions = useMemo(() => {
    return map(MethodType, (method) => ({
      label: toUpper(method),
      value: method,
    }));
  }, []);

  const MethodSelector = () => {
    return <Select style={{ width: 96 }} options={methodOptions} defaultValue={MethodType.get} onSelect={setMethod} />;
  };

  async function sumbit(axiosRequest: AxiosRequestConfig) {
    setLoading(true);
    const res = await request(axiosRequest).finally(() => setLoading(false));

    if (res?.status >= 200 && res?.status < 300) {
      setAxiosResponse(res);
    }

    setLoading(false);
  }

  const axiosRequest = useMemo(() => {
    const values = form.getFieldsValue();

    if (values.customParamsTimes) {
      const customParams = getCustomTimes(values.customParamsTimes);

      values.params = {
        ...(values.params || {}),
        ...(customParams || {}),
      };

      delete values.customParamsTimes;
    }

    if (values.customDataTimes) {
      const customParams = getCustomTimes(values.customDataTimes);

      values.data = {
        ...(values.data || {}),
        ...(customParams || {}),
      };

      delete values.customDataTimes;
    }

    if (values.customDataFiles) {
      const customParams = getCustomFiles(values.customDataFiles);

      values.data = {
        ...(values.data || {}),
        ...(customParams || {}),
      };

      delete values.customDataFiles;
    }

    return getRequestByValues(Object.assign({ method, url }, values));
  }, [method, url, form.getFieldsValue()]);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%" }}>
        <div style={{ display: "flex", marginBottom: 10 }}>
          <Input
            css={{ width: "90%", marginRight: 5 }}
            addonBefore={<MethodSelector />}
            placeholder="please input URL"
            defaultValue={url}
            onChange={(e) => setUrl(e.target.value?.trim())}
          />
          <Button
            type="primary"
            disabled={loading}
            onClick={() => {
              if (urlRegex.test(url)) {
                form.submit();
              } else {
                message.warning("please input valid url");
              }
            }}
          >
            Send
          </Button>
        </div>
        <div>
          <Form
            form={form}
            name="postman-request-control-form"
            initialValues={{
              headers: configInfo?.authorization ? { Authorization: configInfo?.authorization } : null,
              params: null,
              customParamsTimes: null,
              data: null,
              customDataTimes: null,
              customDataFiles: null,
            }}
            onValuesChange={() => {
              setCount(count + 1);
            }}
            onFinish={() => {
              sumbit(axiosRequest);
            }}
          >
            <Tabs defaultActiveKey="1" items={items} />
          </Form>
        </div>
      </div>
      <div style={{ width: "50%", fontSize: dsc.fontSize.xxs, paddingLeft: 10 }}>
        <div style={{ marginBottom: 8 }}>
          <HttpRequestView request={axiosRequest} />
        </div>
        <div css={{ marginBottom: 8, "& > *": { marginRight: 4 } }}>
          <Popover content={<CreateCURL request={Object.assign({}, axiosRequest, { url })} />} trigger="click">
            <Button size="small" style={{ fontSize: dsc.fontSize.xxs }}>
              {t("openapi.cURL")}
            </Button>
          </Popover>
        </div>
        {!isEmpty(axiosResponse) && <HttpResponseView {...axiosResponse} />}
      </div>
    </div>
  );
}
