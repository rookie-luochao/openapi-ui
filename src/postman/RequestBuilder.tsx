import { request } from "@request";
import { Button, Form, Input, Popover, Select, Tabs, TabsProps, message } from "antd";
import { AxiosHeaders, AxiosRequestConfig, AxiosResponse } from "axios";
import { isEmpty, map, toUpper } from "lodash-es";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { fullUrlRegex } from "../core/regex";
import { dsc } from "../core/style/defaultStyleConfig";
import { HttpRequestView } from "../openapi/HttpRequestView";
import { HttpResponseView } from "../openapi/HttpResponseView";
import { CreateCURL } from "../openapi/RequestBuilder";
import { parameterPositionMap } from "../openapi/config";
import { MethodType } from "../openapi/type";
import { RequestBodyInput, RequestHeaderInput, RequestParameterInput } from "./RequestInput";
import { getRequestByValues } from "./request";

interface IRequest {
  headers?: AxiosHeaders;
  params?: AxiosRequestConfig["params"];
  data?: AxiosRequestConfig["data"];
}

const FormItem = Form.Item<IRequest>;

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
      <FormItem name="params">
        <RequestParameterInput />
      </FormItem>
    ),
  },
  {
    key: "2",
    label: parameterPositionMap.body,
    children: (
      <FormItem name="data">
        <RequestBodyInput />
      </FormItem>
    ),
  },
];

export function RequestBuilder() {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const [axiosResponse, setAxiosResponse] = useState({} as AxiosResponse);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0); // hack for sync request-view
  const [method, setMethod] = useState(MethodType.get);
  const [url, setUrl] = useState("");

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
    return getRequestByValues(Object.assign({ method, url }, form.getFieldsValue()));
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
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button
            type="primary"
            disabled={loading}
            onClick={() => {
              if (fullUrlRegex.test(url)) {
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
            initialValues={{ headers: null, params: null, data: null }}
            onValuesChange={() => {
              setCount(count + 1);
            }}
            onFinish={() => {
              sumbit(axiosRequest);
            }}
          >
            <Tabs defaultActiveKey="0" items={items} />
          </Form>
        </div>
      </div>
      <div style={{ flex: 1, fontSize: dsc.fontSize.xxs, paddingLeft: 10 }}>
        <div style={{ marginBottom: 8 }}>
          <HttpRequestView request={axiosRequest} />
        </div>
        <div css={{ marginBottom: 8, "& > *": { marginRight: 4 } }}>
          <Popover content={<CreateCURL request={Object.assign(axiosRequest, { url })} />} trigger="click">
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