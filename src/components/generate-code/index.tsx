import { useTheme } from "@emotion/react";
import { Button, Radio, message } from "antd";
import { AxiosRequestConfig } from "axios";
import copy from "copy-to-clipboard";
import { useTranslation } from "react-i18next";

import { ITheme, dsc } from "../../core/style/defaultStyleConfig";
import { httpCardWrapStyle } from "../../openapi/style";

export function CreateGenerateCode({ request }: { request: AxiosRequestConfig }) {
  const { t } = useTranslation();
  const theme = useTheme() as ITheme;
  const { method, url, headers, params, data } = request;
  const template = `  import axios from "axios";

  const config = {
    method: "${method}",
    url: "${url}",
    headers: ${JSON.stringify(headers)},
    ${params ? "params: " + JSON.stringify(params) : "params: null"},
    ${data ? "data: " + JSON.stringify(data) : "data: null"},
  };

  axios(config).then((response)=>{
    console.log(JSON.stringify(response.data));
  }).catch((error)=>{
    console.log(error);
  });`;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Radio.Group buttonStyle="solid" defaultValue="axios">
          <Radio.Button value="axios">JavaScript</Radio.Button>
          {/* <Radio.Button value="python">python</Radio.Button> */}
        </Radio.Group>
        <Button
          type="primary"
          onClick={() => {
            copy(template);
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
        {template}
      </pre>
    </div>
  );
}
