import { AxiosRequestConfig } from "axios";
import { filter, first, isUndefined, keys, map, pick, pickBy, reduce, replace } from "lodash-es";
import { Dictionary } from "react-router-toolkit";
import { patchSchema } from "./patchSchema";
import { IOpenAPI, IOperationEnhance, ISchema, TParameter } from "./type";
import { getRequestBodyContent } from "./util";

function compilePath(path: string, params: Dictionary<any> = {}): string {
  return replace(path, /{([\s\S]+?)}/g, (target: string, key: string) =>
    ([] as string[]).concat((params as any)[key] ?? target).join(","),
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
    return first(keys(getRequestBodyContent(operation.requestBody))) || "";
  }

  return first<string>(operation.produces || []) || "";
};

export const setAxiosConfigFromOperation =
  (operation: Partial<IOperationEnhance>, openapi: IOpenAPI) =>
  (values: Dictionary<any> = {}): AxiosRequestConfig => {
    const req: AxiosRequestConfig = {
      method: operation.method,
      url: operation.basePath + compilePath(operation.path || "", values),
      params: pickValuesIn("query", operation.parameters || ([] as any[]), values),
      headers: pickBy(
        pickValuesIn("header", operation.parameters || ([] as any[]), values),
        (v: any) => !isUndefined(v),
      ),
    };

    req.headers?.["Referer"] && delete req.headers["Referer"];

    if (values.body) {
      req.data = values.body;
    }

    let contentType = getHeadContentType(operation) || "application/json";

    if (isFormURLEncoded(contentType) || isMultipartFormData(contentType)) {
      const schema = patchSchema<ISchema>(
        operation.requestBody?.content?.[contentType]?.schema,
        openapi?.components?.schemas,
      );
      // when the Content-Type is multipart/form-data, axios supports automatically serializing ordinary objects into a FormData object
      req.data = pick(values, keys((schema as ISchema)?.properties));

      // TODO: this is hack for swagger2openapi tool convert "in formData" to application/x-www-form-urlencoded
      if (openapi?.["x-original-swagger-version"]) {
        contentType = "multipart/form-data";
      }
    }

    if (req.data) {
      req.headers = {
        ...req.headers,
        "Content-Type": contentType + ";charset=UTF-8",
      };
    }

    return req;
  };
