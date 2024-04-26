import { Button, Form, Input, message } from "antd";
import { isEmpty, isObject } from "lodash-es";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toQueryString } from "react-router-toolkit";
import { urlRegex } from "../core/regex";
import { useOpenapiWithServiceInfoStore } from "../core/store";
import { dsc } from "../core/style/defaultStyleConfig";
import { mainLayoutPath } from "../main/routes";
import { IPaths } from "../openapi/type";
import { flattenOperations } from "../openapi/useOpenapiInfo";
import { ImportModeType } from "./config";
import { ITextImport } from "./type";
import { parseSwaggerOrOpenapi } from "./util";

const FormItem = Form.Item<ITextImport>;

export function TextImportView() {
  const { updateOpenapiWithServiceInfo } = useOpenapiWithServiceInfoStore();
  const [form] = Form.useForm<ITextImport>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  async function onFinish(values: ITextImport) {
    let url = values.serviceURL;
    const content = values.openapiTextContent;

    if (!url?.trim() || !content) {
      return message.warning(t("login.requiredFieldPlaceholder"));
    }

    if (!urlRegex.test(url)) {
      url = `http://${url}`;
    }

    try {
      const openapi = await parseSwaggerOrOpenapi(content);

      if (!isObject(openapi) || isEmpty(openapi.paths)) {
        return message.warning(t("login.parseTextWarn"));
      }

      const basicInfo = {
        serviceURL: url,
        importModeType: ImportModeType.text,
      };
      const openapiInfo = {
        ...basicInfo,
        openapi: openapi,
        operations: flattenOperations(openapi.paths as IPaths),
      };
      updateOpenapiWithServiceInfo(openapiInfo);
      navigate(`/${mainLayoutPath}${toQueryString(basicInfo)}`);
    } catch (e) {
      message.warning(t("login.parseTextWarn"));
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
      <FormItem
        name="serviceURL"
        label={t("login.serviceURLLabel2")}
        rules={[{ required: true, message: t("login.serviceURLPlaceholder2") }]}
      >
        <Input placeholder={t("login.serviceURLPlaceholder2")} />
      </FormItem>
      <FormItem
        name="openapiTextContent"
        label={t("login.openapiTextContentLabel")}
        rules={[{ required: true, message: t("login.openapiTextContentPlaceholder") }]}
      >
        <Input.TextArea
          placeholder={t("login.openapiTextContentPlaceholder")}
          autoSize={{ minRows: 12, maxRows: 36 }}
        />
      </FormItem>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%", fontSize: dsc.fontSize.xs }}>
          {t("login.importBtn")}
        </Button>
      </Form.Item>
    </Form>
  );
}
