import axios from "axios";
import { assign, reduce, toLower } from "lodash-es";
import { useEffect, useState } from "react";
import { IOpenapiWithServiceInfo, useOpenapiWithServiceInfoStore } from "../core/store";
import { ImportModeType } from "../login/config";
import { IMethodType, IOperation, IOperationEnhanceMap, IPaths } from "./type";

// use operationId combine Operations
const patchOperation =
  (path: string, method: IMethodType, operation: IOperation) =>
  (operations: IOperationEnhanceMap, tag: string): IOperationEnhanceMap => {
    // without openapiId, use path + method as the unique name, this combination can determine the uniqueness
    const operationId = operation.operationId || encodeURIComponent(`${path}#${method}`);

    // last struct is { [operationid: apiName]: apiInfo }
    return assign(operations, {
      [decodeURIComponent(operationId)]: {
        operationName: operation.operationId || path,
        operationId: operationId,
        ...operation,
        group: tag,
        method: toLower(method),
        path,
      },
    });
  };

// flatten operations, last struct is { [operationid: apiName]: apiInfo }
export function flattenOperations(paths: IPaths) {
  return reduce(
    paths,
    (lastOperationMap, methodMap, path) =>
      reduce(
        methodMap,
        (last, operation: IOperation, method) =>
          reduce(
            operation.tags || ["default"],
            patchOperation(path, method as IMethodType, {
              ...operation,
            }),
            last,
          ),
        lastOperationMap,
      ),
    {} as IOperationEnhanceMap,
  );
}

// this is dev mock hook
export function useOpenapiInfo() {
  const { updateOpenapiWithServiceInfo } = useOpenapiWithServiceInfoStore();
  const [openapiInfo, setOpenapiInfo] = useState({} as IOpenapiWithServiceInfo);

  useEffect(() => {
    getMockOpenapiData();
  }, []);

  async function getMockOpenapiData() {
    const res = await axios.get("/demo/server/swagger/swagger.json");
    const newOpenapiInfo = {
      serviceURL: "http://127.0.0.1:1323",
      openapi: res.data,
      operations: flattenOperations(res.data.paths),
      importModeType: ImportModeType.file,
    };

    updateOpenapiWithServiceInfo(newOpenapiInfo);
    setOpenapiInfo(newOpenapiInfo);
  }

  return openapiInfo;
}
