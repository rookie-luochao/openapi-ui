import { useTheme } from "@emotion/react";
import { Button, Form, Input, message } from "antd";
import Upload from "antd/es/upload/Upload";
import { UploadChangeParam } from "antd/es/upload/interface";
import { isEmpty, isObject } from "lodash-es";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toQueryString } from "react-router-toolkit";

import { UploadOutlined } from "@/components/icon";
import { urlRegex } from "@/core/regex";
import { useOpenapiWithServiceInfoStore } from "@/core/store";
import { ITheme, dsc } from "@/core/style/defaultStyleConfig";
import { flexAlignItemsCenterOpts } from "@/core/style/utils";
import { flattenOperations } from "@/pages/openapi/hook/utils";
import { mainLayoutName } from "@/router/config";
import { IPaths } from "@/type";

import { ImportModeType } from "../common/config";
import { IFileImport } from "../common/type";
import { parseSwaggerOrOpenapi, readFileContent } from "../common/utils";

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
      navigate(`/${mainLayoutName}${toQueryString(basicInfo)}`);
    } catch (e) {
      message.warning(t("login.parseWarn"));
    }
  }

  return (
    <Form
      form={form}
      initialValues={{ serviceURL: "", file: [] }}
      layout="vertical"
      name="fileImportForm"
      onFinish={onFinish}
    >
      <FormItem
        label={t("login.serviceURLLabel2")}
        name="serviceURL"
        rules={[{ required: true, message: t("login.serviceURLPlaceholder2") }]}
      >
        <Input placeholder={t("login.serviceURLPlaceholder2")} />
      </FormItem>
      <FormItem
        label={t("login.uploadLabel")}
        name="file"
        rules={[{ required: true, message: t("login.uploadPlaceholder") }]}
        valuePropName="fileList"
        getValueFromEvent={(e: UploadChangeParam) => {
          return e.fileList || [];
        }}
      >
        <Upload accept=".json,.yml" beforeUpload={() => false} maxCount={1}>
          <Button
            icon={<UploadOutlined fill={theme.color.menuItem} />}
            css={[
              flexAlignItemsCenterOpts(),
              {
                "&:hover path": {
                  fill: theme.color.primary,
                },
              },
            ]}
          >
            {t("login.uploadBtn")}
          </Button>
        </Upload>
      </FormItem>
      <Form.Item>
        <Button htmlType="submit" style={{ width: "100%", fontSize: dsc.fontSize.xs }} type="primary">
          {t("login.importBtn")}
        </Button>
      </Form.Item>
    </Form>
  );
}
