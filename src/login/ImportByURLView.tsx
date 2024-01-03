import { request } from "@request";
import { Button, Form, Input, message } from "antd";
import { isEmpty, isObject } from "lodash-es";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useOpenapiWithServiceInfoStore } from "../core/store";
import { mainLayoutPath } from "../main/routes";
import { IPaths } from "../openapi/type";
import { flattenOperations } from "../openapi/useOpenapiInfo";
import { ImportModeType } from "./config";
import { IURLImport } from "./type";
import { parseSwaggerOrOpenapi } from "./util";

const FormItem = Form.Item<IURLImport>;

export function URLImportView() {
  const { updateOpenapiWithServiceInfo } = useOpenapiWithServiceInfoStore();
  const [form] = Form.useForm<IURLImport>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  async function onFinish(values: IURLImport) {
    setLoading(true);
    let url = values.serviceURL;

    if (!url.trim()) {
      return message.warning(t("login.requiredFieldPlaceholder"));
    }

    if (url.endsWith("/")) {
      url = url.slice(0, url.length - 1);
      values.serviceURL = url;
    }

    if (values.servicePath) {
      if (values.servicePath.startsWith("/")) {
        url = `${url}${values.servicePath}`;
        values.servicePath = values.servicePath.slice(1);
      } else {
        url = `${url}/${values.servicePath}`;
      }
    }

    const res = await request({ url: url });

    if (res.status >= 200 && res.status < 300) {
      try {
        const openapi = await parseSwaggerOrOpenapi(res.data);

        if (!isObject(openapi) || isEmpty(openapi.paths)) {
          return message.warning(t("login.parseTextWarn"));
        }

        const openapiInfo = {
          serviceURL: values.serviceURL,
          servicePath: values.servicePath,
          openapi: openapi,
          operations: flattenOperations((openapi.paths || {}) as IPaths),
          importModeType: ImportModeType.url,
        };

        updateOpenapiWithServiceInfo(openapiInfo);
        navigate(`/${mainLayoutPath}?logon=yes`);
      } catch (e) {
        message.warning(t("login.parseTextWarn"));
      }
    }

    setLoading(false);
  }

  return (
    <Form
      name="urlImportForm"
      form={form}
      layout="vertical"
      initialValues={{ serviceURL: "", servicePath: "" }}
      onFinish={onFinish}
    >
      <FormItem
        name="serviceURL"
        label={t("login.serviceURLLabel")}
        rules={[{ required: true, message: t("login.serviceURLPlaceholder") }]}
      >
        <Input placeholder={t("login.serviceURLPlaceholder")} />
      </FormItem>
      <FormItem name="servicePath" label={t("login.servicePathLabel")}>
        <Input placeholder={t("login.servicePathPlaceholder")} />
      </FormItem>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }} loading={loading}>
          {t("login.importBtn")}
        </Button>
      </Form.Item>
    </Form>
  );
}
