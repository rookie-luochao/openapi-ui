import { useTheme } from "@emotion/react";
import { Button, message } from "antd";
import { AxiosRequestConfig } from "axios";
import copy from "copy-to-clipboard";
import { useTranslation } from "react-i18next";
import { ITheme, dsc } from "../../core/style/defaultStyleConfig";
import { httpCardWrapStyle } from "../../openapi/HttpRequestView";
import { generateCURL } from "./generateCURL";

export function CreateCURL({ request }: { request: AxiosRequestConfig }) {
  const { t } = useTranslation();
  const theme = useTheme() as ITheme;
  const cURL = generateCURL(request);

  return (
    <div>
      <div>
        <Button
          type="primary"
          size="small"
          style={{ fontSize: dsc.fontSize.xxs }}
          onClick={() => {
            copy(cURL);
            message.success(t("openapi.copySuccess"));
          }}
        >
          {t("openapi.copy")}
        </Button>
      </div>
      <pre
        style={{
          width: 672,
          fontSize: dsc.fontSize.xs,
          backgroundColor: theme.color.primaryLight,
          color: theme.color.menuItem,
          ...httpCardWrapStyle,
        }}
      >
        {cURL}
      </pre>
    </div>
  );
}
