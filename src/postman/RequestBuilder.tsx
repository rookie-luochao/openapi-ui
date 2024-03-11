import { request } from "@request";
import { Button, Form, Input, Popover, Select, Tabs, TabsProps, Tooltip, message } from "antd";
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
import { MethodType } from "../openapi/type";
import { DefineFormField } from "./DefineFormField";
import { RequestBodyInput, RequestHeaderInput, RequestParameterInput } from "./RequestInput";
import { getRequestByValues } from "./request";
import { getCustomFiles, getCustomTimes } from "./utils";

function TipIcon({ size = "18", fill = "#8A8A8A", ...other }) {
  return (
    <svg width={size} height={size} viewBox="0 0 1024 1024" {...other}>
      <path
        d="M512 81.408a422.4 422.4 0 1 0 422.4 422.4A422.4 422.4 0 0 0 512 81.408zm26.624 629.76a45.056 45.056 0 0 1-31.232 12.288 42.496 42.496 0 0 1-31.232-12.8 41.984 41.984 0 0 1-12.8-30.72 39.424 39.424 0 0 1 12.8-30.72 42.496 42.496 0 0 1 31.232-12.288 43.008 43.008 0 0 1 31.744 12.288 39.424 39.424 0 0 1 12.8 30.72 43.008 43.008 0 0 1-13.312 31.744zm87.04-235.52a617.472 617.472 0 0 1-51.2 47.104 93.184 93.184 0 0 0-25.088 31.232 80.896 80.896 0 0 0-9.728 39.936v10.24h-64v-10.24a119.808 119.808 0 0 1 12.288-57.344A311.296 311.296 0 0 1 555.52 460.8l10.24-11.264a71.168 71.168 0 0 0 16.896-44.032A69.632 69.632 0 0 0 563.2 358.4a69.632 69.632 0 0 0-51.2-17.92 67.072 67.072 0 0 0-58.88 26.112 102.4 102.4 0 0 0-16.384 61.44h-61.44a140.288 140.288 0 0 1 37.888-102.4 140.8 140.8 0 0 1 104.96-38.4 135.68 135.68 0 0 1 96.256 29.184 108.032 108.032 0 0 1 36.352 86.528 116.736 116.736 0 0 1-25.088 73.216z"
        fill={fill}
      />
    </svg>
  );
}

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
      label: t("postman.headers"),
      children: (
        <FormItem name="headers">
          <RequestHeaderInput />
        </FormItem>
      ),
    },
    {
      key: "1",
      label: t("postman.query"),
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
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
          {t("postman.body")}&nbsp;
          <Tooltip title={t("postman.bodyTitleTip")} overlayInnerStyle={{ width: 260 }}>
            <TipIcon />
          </Tooltip>
        </div>
      ),
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
            placeholder={t("postman.urlPlaceholder")}
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
                message.warning(t("postman.validUrlTip"));
              }
            }}
          >
            {t("postman.send")}
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
