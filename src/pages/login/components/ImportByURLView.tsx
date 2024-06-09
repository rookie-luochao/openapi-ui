import { request } from "@request";
import { Button, Form, Input, message } from "antd";
import { isEmpty, isObject } from "lodash-es";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toQueryString } from "react-router-toolkit";

import { urlRegex } from "@/core/regex";
import { useOpenapiWithServiceInfoStore } from "@/core/store";
import { dsc } from "@/core/style/defaultStyleConfig";
import { IPaths } from "@/pages/openapi/common/type";
import { flattenOperations } from "@/pages/openapi/hook/utils";
import { mainLayoutName } from "@/router/config";

import { ImportModeType } from "../common/config";
import { IURLImport } from "../common/type";
import { parseSwaggerOrOpenapi } from "../common/utils";

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
        navigate(`/${mainLayoutName}${toQueryString(Object.assign(basicInfo, { logon: "yes" }))}`);
      } catch (e) {
        message.warning(t("login.parseTextWarn"));
      }
    }

    setLoading(false);
  }

  return (
    <Form form={form} initialValues={{ serviceURL: "" }} layout="vertical" name="urlImportForm" onFinish={onFinish}>
      <FormItem
        label={t("login.serviceURLLabel")}
        name="serviceURL"
        rules={[{ required: true, message: t("login.serviceURLPlaceholder") }]}
      >
        <Input placeholder={t("login.serviceURLPlaceholder")} />
      </FormItem>
      <Form.Item>
        <Button htmlType="submit" loading={loading} style={{ width: "100%", fontSize: dsc.fontSize.xs }} type="primary">
          {t("login.importBtn")}
        </Button>
      </Form.Item>
    </Form>
  );
}
