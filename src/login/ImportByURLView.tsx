import { request } from "@request";
import { Button, Form, Input, message } from "antd";
import { isEmpty, isObject } from "lodash-es";
import { useState } from "react";
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

    if (!urlRegex.test(url)) {
      url = `http://${url}`;
    }

    const res = await request({ url: url });

    if (res?.status >= 200 && res?.status < 300) {
      try {
        const openapi = await parseSwaggerOrOpenapi(res.data);

        if (!isObject(openapi) || isEmpty(openapi.paths)) {
          return message.warning(t("login.parseTextWarn"));
        }

        const basicInfo = {
          serviceURL: url,
          importModeType: ImportModeType.url,
        };
        const openapiInfo = {
          ...basicInfo,
          openapi: openapi,
          operations: flattenOperations((openapi.paths || {}) as IPaths),
        };
        updateOpenapiWithServiceInfo(openapiInfo);
        navigate(`/${mainLayoutPath}${toQueryString(Object.assign(basicInfo, { logon: "yes" }))}`);
      } catch (e) {
        message.warning(t("login.parseTextWarn"));
      }
    }

    setLoading(false);
  }

  return (
    <Form name="urlImportForm" form={form} layout="vertical" initialValues={{ serviceURL: "" }} onFinish={onFinish}>
      <FormItem
        name="serviceURL"
        label={t("login.serviceURLLabel")}
        rules={[{ required: true, message: t("login.serviceURLPlaceholder") }]}
      >
        <Input placeholder={t("login.serviceURLPlaceholder")} />
      </FormItem>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%", fontSize: dsc.fontSize.xs }} loading={loading}>
          {t("login.importBtn")}
        </Button>
      </Form.Item>
    </Form>
  );
}
