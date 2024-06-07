import { AxiosRequestConfig } from "axios";
import { isArray, isObject, isString, map, mapValues } from "lodash-es";

import { isFormURLEncoded, isJSON, isMultipartFormData } from "./request";

function displayMultipart(boundary: string, data: any) {
  const getPart = (k: string, v: any): string => {
    if (v instanceof File || v instanceof Blob) {
      return `${boundary}
        Content-Disposition: form-data; name="${k}"${(v as File).name ? `; filename="${(v as File).name}"` : ""}
        Content-Type: ${v.type}

        [File Content]
      `;
    }

    if (isArray(v)) {
      return map(v, (item) => getPart(k, item)).join("\n");
    }

    return `${boundary}
      Content-Disposition: form-data; name="${k}"

      ${isObject(v) ? JSON.stringify(v) : v}
    `;
  };

  return map(data, (v: any, k: string) => getPart(k, v)).join("\n") + `${boundary}--`;
}

export function stringifyBody(request: AxiosRequestConfig) {
  const contentType = request?.headers?.["Content-Type"];
  let data = request.data;

  if (isMultipartFormData(contentType)) {
    const boundary = "----WebKitFormBoundaryzYJBBCMGeui4wPWd";
    request.headers = {
      ...request.headers,
      "Content-Type": `multipart/form-data; boundary=${boundary}`,
    };
    data = displayMultipart(boundary, request.data);
  }

  if (isFormURLEncoded(contentType)) {
    data = JSON.stringify(
      mapValues(request.data, (v: any) => {
        if (isObject(v) && !isArray(v)) {
          return JSON.stringify(request.data, null, 2);
        }

        return v;
      }),
    );
  }

  if (isJSON(contentType)) {
    data = JSON.stringify(request.data, null, 2);
  }

  return isString(data) ? data : JSON.stringify(data);
}
