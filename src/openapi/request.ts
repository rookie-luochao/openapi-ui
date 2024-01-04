import { defaultTimeout } from "@request";
import { AxiosRequestConfig } from "axios";
import { filter, first, isUndefined, keys, map, pick, pickBy, reduce, replace } from "lodash-es";
import { Dictionary } from "react-router-toolkit";
import { IOperationEnhance, ISchema, TParameter } from "./type";

function compilePath(path: string, params: Dictionary<any> = {}): string {
  return replace(path, /{([\s\S]+?)}/g, (target: string, key: string) =>
    ([] as string[]).concat((params as any)[key] || target).join(","),
  );
}

function pickParametersIn(where: string) {
  return (parameters: TParameter[]): TParameter[] =>
    filter(parameters, (parameter: TParameter) => parameter.in === where);
}

function pickKeysIn(where: string) {
  return (parameters: TParameter[]): string[] =>
    map(pickParametersIn(where)(parameters), (parameter: TParameter) => parameter.name);
}

function pickDefaults(where: string, parameters: TParameter[]) {
  return reduce(
    pickParametersIn(where)(parameters),
    (defaults, parameter: TParameter) => {
      return {
        ...defaults,
        [String(parameter.name)]: (parameter.schema as ISchema)?.default,
      };
    },
    {},
  );
}

function pickValuesIn(where: string, parameters: TParameter[], values: any) {
  return {
    ...pickDefaults(where, parameters),
    ...pick(values, pickKeysIn(where)(parameters)),
  };
}

export const isMultipartFormData = (contentType = "") => contentType.includes("multipart/form-data");
export const isJSON = (contentType = "") => contentType.includes("application/json");
export const isFormURLEncoded = (contentType = "") => contentType.includes("application/x-www-form-urlencoded");

export const getHeadContentType = (operation: Partial<IOperationEnhance>) => {
  if (operation.requestBody) {
    return first(keys(operation.requestBody.content)) || "";
  }

  return first<string>(operation.produces || []) || "";
};

export const setAxiosConfigFromOperation =
  (operation: Partial<IOperationEnhance>) =>
  (values: any = {}): AxiosRequestConfig => {
    const req: AxiosRequestConfig = {
      method: operation.method,
      url: operation.basePath + compilePath(operation.path || "", values),
      params: pickValuesIn("query", operation.parameters || ([] as any), values),
      headers: pickBy(pickValuesIn("header", operation.parameters || ([] as any), values), (v: any) => !isUndefined(v)),
      timeout: defaultTimeout * 1000,
    };

    req.headers?.["Referer"] && delete req.headers["Referer"];

    if (values.body) {
      req.data = values.body;
    }

    const contentType = getHeadContentType(operation) || "application/json";

    if ((req as any).data) {
      req.headers = {
        ...req.headers,
        "Content-Type": contentType + ";charset=UTF-8",
      };
    }

    return req;
  };
