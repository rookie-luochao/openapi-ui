import { request } from "@request";
import { useEffect } from "react";
import { useConfigInfoStore, useOpenapiWithServiceInfoStore } from "../../core/store";
import { IThemeType } from "../../core/style/theme";
import { ImportModeType } from "../../login/config";
import { parseSwaggerOrOpenapi } from "../../login/util";
import { IPaths } from "../../openapi/type";
import { flattenOperations } from "../../openapi/useOpenapiInfo";

export function InitPackageConfig() {
  const { updateOpenapiWithServiceInfo } = useOpenapiWithServiceInfoStore();
  const { updateConfigInfo } = useConfigInfoStore();

  useEffect(() => {
    const configElement = document.getElementById("openapi-ui-container");
    const specUrl = configElement?.getAttribute("spec-url");
    const theme = configElement?.getAttribute("theme");

    if (specUrl) {
      fetchOpenapiInfo(specUrl);
    }

    if (theme) {
      updateConfigInfo({ theme: theme as IThemeType });
    }
  }, []);

  async function fetchOpenapiInfo(url: string) {
    const res = await request({ url: url });

    if (res?.status >= 200 && res?.status < 300) {
      const openapi = await parseSwaggerOrOpenapi(res.data);
      const openapiInfo = {
        serviceURL: url,
        importModeType: ImportModeType.url,
        openapi: openapi,
        operations: flattenOperations((openapi.paths || {}) as IPaths),
      };
      updateOpenapiWithServiceInfo(openapiInfo);
    }
  }

  return null;
}
