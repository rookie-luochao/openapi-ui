import { AxiosRequestConfig } from "axios";
import { forEach, isEmpty, map, reduce } from "lodash-es";
import { Dictionary, toQueryString } from "react-router-toolkit";

import { MethodType } from "@/pages/openapi/common/config";

export function mapToFormData(map: Dictionary<any>) {
  const formData = new FormData();

  forEach(map, (value, key) => {
    formData.append(key, value);
  });

  return formData;
}

// TODO: this is basic generateCURL, need to serialize formData
export function generateCURL(request: AxiosRequestConfig) {
  const { url = "", method = MethodType.post, headers, data: body, params } = request;
  let curlUrl = "";
  let curl = "";
  let curlHeaders = "";
  let curlData = "";
  let curlForm = "";

  if (!url.startsWith("http")) {
    const newUrl = new URL(url, globalThis.location.href);
    curlUrl = newUrl.href;
  } else {
    curlUrl = url;
  }

  if (!isEmpty(params)) {
    curlUrl = `${curlUrl}${toQueryString(params)}`;
  }

  curl = `curl -X ${method.toUpperCase()} '${curlUrl}' \\\n`;

  curlHeaders = map(headers, (value, key) => ` -H '${key}: ${value}'`).join(" \\\n");
  if (curlHeaders) {
    curlHeaders = `${curlHeaders} \\\n`;
  }

  if (body instanceof URLSearchParams) {
    curlData = ` -d ${body.toString()} \\\n`;
  } else if (body instanceof File) {
    curlData = ` --data-binary @${body.name} \\\n`;
  } else if (body instanceof FormData) {
    curlForm = reduce(
      Array.from(body),
      (aggregator, [key, value]) => {
        if (value instanceof File) {
          return [...aggregator, ` -F '${key}=@${value.name}' \\\n`];
        }

        const multiple = value.match(/([^,],)/gm);

        if (multiple) {
          const multipleResults = map(multiple, (one) => ` -F '${key}[]=${one}' \\\n`);

          return [...aggregator, ...multipleResults];
        }

        return [...aggregator, ` -F '${key}=${value}' \\\n`];
      },
      [] as string[],
    ).join(" \\\n");
  } else if (body instanceof Object) {
    try {
      curlData = ` -d '${JSON.stringify(body)}' \\\n`;
    } catch (err) {
      // _
    }
  }

  return `${curl}${curlHeaders}${curlData}${curlForm} --compressed`;
}
