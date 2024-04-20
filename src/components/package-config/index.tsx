import { request } from "@request";
import { useEffect } from "react";
import { useOpenapiWithServiceInfoStore } from "../../core/store";
import { ImportModeType } from "../../login/config";
import { parseSwaggerOrOpenapi } from "../../login/util";
import { IPaths } from "../../openapi/type";
import { flattenOperations } from "../../openapi/useOpenapiInfo";

export function InitPackageConfig() {
  const { updateOpenapiWithServiceInfo } = useOpenapiWithServiceInfoStore();

  useEffect(() => {
    const configElement = document.getElementById("openapi-ui-container");
    const specUrl = configElement?.getAttribute("spec-url");

    if (specUrl) {
      fetchOpenapiInfo(specUrl);
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
