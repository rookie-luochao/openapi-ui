import { assign, reduce, toLower } from "lodash-es";

import { IMethodType, IOperation, IOperationEnhanceMap, IPaths } from "@/type";

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
