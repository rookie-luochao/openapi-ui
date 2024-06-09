import axios from "axios";
import { useCallback, useEffect, useState } from "react";

import { IOpenapiWithServiceInfo, useOpenapiWithServiceInfoStore } from "@/core/store";
import { ImportModeType } from "@/pages/login/common/config";

import { flattenOperations } from "./utils";

// this is dev mock hook
export function useOpenapiInfo() {
  const { updateOpenapiWithServiceInfo } = useOpenapiWithServiceInfoStore();
  const [openapiInfo, setOpenapiInfo] = useState({} as IOpenapiWithServiceInfo);

  const getMockOpenapiData = useCallback(async () => {
    const res = await axios.get("/demo/server/swagger/swagger.json");
    const newOpenapiInfo = {
      serviceURL: "http://127.0.0.1:1323",
      openapi: res.data,
      operations: flattenOperations(res.data.paths),
      importModeType: ImportModeType.file,
    };

    updateOpenapiWithServiceInfo(newOpenapiInfo);
    setOpenapiInfo(newOpenapiInfo);
  }, [updateOpenapiWithServiceInfo]);

  useEffect(() => {
    getMockOpenapiData();
  }, [getMockOpenapiData]);

  return openapiInfo;
}
