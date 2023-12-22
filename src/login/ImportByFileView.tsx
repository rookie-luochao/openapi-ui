import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload, message } from "antd";
import { UploadChangeParam } from "antd/es/upload/interface";
import * as yaml from "js-yaml";
import { isEmpty, isObject } from "lodash-es";
import { useNavigate } from "react-router-dom";
import { useOpenapiWithServiceInfoStore } from "../core/store";
import { mainLayoutPath } from "../main/routes";
import { IOpenAPI, IPaths } from "../openapi/type";
import { flattenOperations } from "../openapi/useOpenapiInfo";
import { ImportModeType, requiredFieldPlaceholder, serviceURLLabel, serviceURLPlaceholder } from "./config";
import { IFileImport } from "./type";
import { isJSONString, readFileContent } from "./util";

const FormItem = Form.Item<IFileImport>;

export function FileImportView() {
  const { updateOpenapiWithServiceInfo } = useOpenapiWithServiceInfoStore();
  const [form] = Form.useForm<IFileImport>();
  const navigate = useNavigate();
  const warnPlaceholder = "parse failed, please upload correct format openapi.json/openapi.yml file";

  async function onFinish(values: IFileImport) {
    let url = values.serviceURL;

    if (!url?.trim() || !values.file[0]?.originFileObj) {
      return message.warning(requiredFieldPlaceholder);
    }

    if (url.endsWith("/")) {
      url = url.slice(0, url.length - 1);
    }

    const content = await readFileContent(values.file[0].originFileObj);
    let openapiMap = {} as IOpenAPI;

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
        importModeType: ImportModeType.file,
      };

      updateOpenapiWithServiceInfo(openapiInfo);
      navigate(`/${mainLayoutPath}`);
    } catch (e) {
      message.warning(warnPlaceholder);
    }
  }

  return (
    <Form
      name="fileImportForm"
      form={form}
      layout="vertical"
      initialValues={{ serviceURL: "", file: [] }}
      onFinish={onFinish}
    >
      <FormItem name="serviceURL" label={serviceURLLabel} rules={[{ required: true, message: serviceURLPlaceholder }]}>
        <Input placeholder={serviceURLPlaceholder} />
      </FormItem>
      <FormItem
        name="file"
        label="openapi.json/openapi.yml"
        valuePropName="fileList"
        rules={[{ required: true, message: "please select openapi.json/openapi.yml to upload" }]}
        getValueFromEvent={(e: UploadChangeParam) => {
          return e.fileList || [];
        }}
      >
        <Upload maxCount={1} beforeUpload={() => false} accept=".json,.yml">
          <Button icon={<UploadOutlined />}>click to upload</Button>
        </Upload>
      </FormItem>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          import
        </Button>
      </Form.Item>
    </Form>
  );
}
