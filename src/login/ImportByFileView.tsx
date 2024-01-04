import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload, message } from "antd";
import { UploadChangeParam } from "antd/es/upload/interface";
import { isEmpty, isObject } from "lodash-es";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useOpenapiWithServiceInfoStore } from "../core/store";
import { mainLayoutPath } from "../main/routes";
import { IPaths } from "../openapi/type";
import { flattenOperations } from "../openapi/useOpenapiInfo";
import { ImportModeType } from "./config";
import { IFileImport } from "./type";
import { parseSwaggerOrOpenapi, readFileContent } from "./util";

const FormItem = Form.Item<IFileImport>;

export function FileImportView() {
  const { updateOpenapiWithServiceInfo } = useOpenapiWithServiceInfoStore();
  const [form] = Form.useForm<IFileImport>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  async function onFinish(values: IFileImport) {
    let url = values.serviceURL;

    if (!url?.trim() || !values.file[0]?.originFileObj) {
      return message.warning(t("login.requiredFieldPlaceholder"));
    }

    if (url.endsWith("/")) {
      url = url.slice(0, url.length - 1);
    }

    const content = await readFileContent(values.file[0].originFileObj);

    try {
      const openapi = await parseSwaggerOrOpenapi(content);

      if (!isObject(openapi) || isEmpty(openapi.paths)) {
        return message.warning(t("login.parseTextWarn"));
      }

      const openapiInfo = {
        serviceURL: url,
        servicePath: "",
        openapi: openapi,
        operations: flattenOperations(openapi.paths as IPaths),
        importModeType: ImportModeType.file,
      };
      updateOpenapiWithServiceInfo(openapiInfo);
      navigate(`/${mainLayoutPath}`);
    } catch (e) {
      message.warning(t("login.parseWarn"));
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
      <FormItem
        name="serviceURL"
        label={t("login.serviceURLLabel")}
        rules={[{ required: true, message: t("login.serviceURLPlaceholder") }]}
      >
        <Input placeholder={t("login.serviceURLPlaceholder")} />
      </FormItem>
      <FormItem
        name="file"
        label={t("login.uploadLabel")}
        valuePropName="fileList"
        rules={[{ required: true, message: t("login.uploadPlaceholder") }]}
        getValueFromEvent={(e: UploadChangeParam) => {
          return e.fileList || [];
        }}
      >
        <Upload maxCount={1} beforeUpload={() => false} accept=".json,.yml">
          <Button icon={<UploadOutlined />}>{t("login.uploadBtn")}</Button>
        </Upload>
      </FormItem>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          {t("login.importBtn")}
        </Button>
      </Form.Item>
    </Form>
  );
}
