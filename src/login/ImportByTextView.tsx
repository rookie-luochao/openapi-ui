import { Button, Form, Input, message } from "antd";
import * as yaml from "js-yaml";
import { isEmpty, isObject } from "lodash-es";
import { useNavigate } from "react-router-dom";
import { useOpenapiWithServiceInfoStore } from "../core/store";
import { mainLayoutPath } from "../main/routes";
import { IOpenAPI, IPaths } from "../openapi/type";
import { flattenOperations } from "../openapi/useOpenapiInfo";
import { ImportModeType, requiredFieldPlaceholder, serviceURLLabel, serviceURLPlaceholder } from "./config";
import { ITextImport } from "./type";
import { isJSONString } from "./util";

const FormItem = Form.Item<ITextImport>;

export function TextImportView() {
  const { updateOpenapiWithServiceInfo } = useOpenapiWithServiceInfoStore();
  const [form] = Form.useForm<ITextImport>();
  const navigate = useNavigate();
  const placeholder = "please enter openapi.json/openapi.yml text";
  const warnPlaceholder = "parse failed, please check openapi.json/openapi.yml text format correctness";

  async function onFinish(values: ITextImport) {
    let url = values.serviceURL;
    let openapiMap = {} as IOpenAPI;
    const content = values.openapiTextContent;

    if (!url?.trim() || !content) {
      return message.warning(requiredFieldPlaceholder);
    }

    if (url.endsWith("/")) {
      url = url.slice(0, url.length - 1);
    }

    try {
      if (isJSONString(content)) {
        openapiMap = JSON.parse(content);
      } else {
        openapiMap = yaml.load(content) as IOpenAPI;
      }

      if (!isObject(openapiMap) || !isEmpty(openapiMap.paths)) {
        return message.warning(warnPlaceholder);
      }

      const openapiInfo = {
        serviceURL: url,
        servicePath: "",
        openapi: openapiMap,
        operations: flattenOperations(openapiMap.paths as IPaths),
        importModeType: ImportModeType.text,
      };

      updateOpenapiWithServiceInfo(openapiInfo);
      navigate(`/${mainLayoutPath}`);
    } catch (e) {
      message.warning(warnPlaceholder);
    }
  }

  return (
    <Form
      name="textImportForm"
      form={form}
      layout="vertical"
      initialValues={{ serviceURL: "", file: [] }}
      onFinish={onFinish}
    >
      <FormItem name="serviceURL" label={serviceURLLabel} rules={[{ required: true, message: serviceURLPlaceholder }]}>
        <Input placeholder={`${serviceURLPlaceholder}`} />
      </FormItem>
      <FormItem
        name="openapiTextContent"
        label="openapi.json/openapi.yml text"
        rules={[{ required: true, message: placeholder }]}
      >
        <Input.TextArea placeholder={placeholder} rows={12} />
      </FormItem>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          import
        </Button>
      </Form.Item>
    </Form>
  );
}
