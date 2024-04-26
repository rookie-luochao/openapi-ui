import { useTheme } from "@emotion/react";
import { Button, Form, Input, Upload, message } from "antd";
import { UploadChangeParam } from "antd/es/upload/interface";
import { isEmpty, isObject } from "lodash-es";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toQueryString } from "react-router-toolkit";
import { UploadOutlined } from "../components/icon";
import { urlRegex } from "../core/regex";
import { useOpenapiWithServiceInfoStore } from "../core/store";
import { ITheme, dsc } from "../core/style/defaultStyleConfig";
import { flexAlignItemsCenterOpts } from "../core/style/utils";
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
  const theme = useTheme() as ITheme;

  async function onFinish(values: IFileImport) {
    let url = values.serviceURL;

    if (!url?.trim() || !values.file[0]?.originFileObj) {
      return message.warning(t("login.requiredFieldPlaceholder"));
    }

    if (!urlRegex.test(url)) {
      url = `http://${url}`;
    }

    const content = await readFileContent(values.file[0].originFileObj);

    try {
      const openapi = await parseSwaggerOrOpenapi(content);

      if (!isObject(openapi) || isEmpty(openapi.paths)) {
        return message.warning(t("login.parseTextWarn"));
      }

      const basicInfo = {
        serviceURL: url,
        importModeType: ImportModeType.file,
      };
      const openapiInfo = {
        ...basicInfo,
        openapi: openapi,
        operations: flattenOperations(openapi.paths as IPaths),
      };
      updateOpenapiWithServiceInfo(openapiInfo);
      navigate(`/${mainLayoutPath}${toQueryString(basicInfo)}`);
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
        label={t("login.serviceURLLabel2")}
        rules={[{ required: true, message: t("login.serviceURLPlaceholder2") }]}
      >
        <Input placeholder={t("login.serviceURLPlaceholder2")} />
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
          <Button
            css={[
              flexAlignItemsCenterOpts(),
              {
                "&:hover path": {
                  fill: theme.color.primary,
                },
              },
            ]}
            icon={<UploadOutlined fill={theme.color.menuItem} />}
          >
            {t("login.uploadBtn")}
          </Button>
        </Upload>
      </FormItem>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%", fontSize: dsc.fontSize.xs }}>
          {t("login.importBtn")}
        </Button>
      </Form.Item>
    </Form>
  );
}
