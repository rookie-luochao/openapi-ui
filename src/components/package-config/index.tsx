import { request } from "@request";
import { useCallback, useEffect } from "react";

import { useConfigInfoStore, useOpenapiWithServiceInfoStore } from "@/core/store";
import { IThemeType } from "@/core/style/themeConfig";
import { ImportModeType } from "@/pages/login/common/config";
import { parseSwaggerOrOpenapi } from "@/pages/login/common/utils";
import { flattenOperations } from "@/pages/openapi/hook/utils";
import { IPaths } from "@/type";

export function InitPackageConfig() {
  const { updateOpenapiWithServiceInfo } = useOpenapiWithServiceInfoStore();
  const { updateConfigInfo } = useConfigInfoStore();

  const fetchOpenapiInfo = useCallback(
    async (url: string) => {
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
    },
    [updateOpenapiWithServiceInfo],
  );

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
  }, [fetchOpenapiInfo, updateConfigInfo]);

  return null;
}
