import { CSSObject } from "@emotion/react";
import { AxiosRequestConfig } from "axios";
import {
  assign,
  isArray,
  isEmpty,
  isObject,
  isString,
  isUndefined,
  keys,
  map,
  mapValues,
  omitBy,
  pick,
  pickBy,
  sortBy,
  toUpper,
} from "lodash-es";
import { Dictionary, toQueryString } from "react-router-toolkit";
import { dsc } from "../core/style/defaultStyleConfig";
import { isFormURLEncoded, isJSON, isMultipartFormData } from "./request";

function getDefaultHeads() {
  return {
    "User-Agent": globalThis.navigator.userAgent,
    Referer: `${globalThis.location.origin}${globalThis.location.pathname}`,
  };
}

function sortObject(object: any): any {
  return pick(object, sortBy(keys(object)));
}

interface IHeadRowProps {
  field: string;
  value: string;
}

export function HeadRow({ field, value }: IHeadRowProps) {
  return (
    <span css={{ display: "block" }}>
      <span css={{ fontWeight: "bold", marginRight: "0.5em" }}>{field}:</span>
      <span>{value}</span>
    </span>
  );
}

function getNeedQuery(queries: Record<string, any>): string {
  const availableQueries = omitBy(queries, isUndefined);

  if (isEmpty(availableQueries)) {
    return "";
  }

  return toQueryString(availableQueries);
}

function buildOriginalUrl(url: string, params: Dictionary<any>) {
  const lastQueries = pickBy(params, (v) => !isEmpty(v));

  return `${url}${getNeedQuery(lastQueries as any)}`;
}

function HttpFirstLine({ method, url, baseURL, params }: AxiosRequestConfig) {
  return (
    <span css={{ fontWeight: "bold" }}>
      {toUpper(method)}
      &nbsp;&nbsp;
      <span css={{ fontWeight: "normal" }}>{buildOriginalUrl((baseURL || "") + url, params)}</span>
      &nbsp;&nbsp;HTTP/1.1
    </span>
  );
}

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

function stringifyBody(request: any) {
  const contentType = request.headers["Content-Type"];
  let data = request.data;

  if (isMultipartFormData(contentType)) {
    const boundary = "----WebKitFormBoundarymnBNxgHqBJhLVZSw";
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

export const httpCardWrapStyle: CSSObject = {
  borderRadius: 6,
  padding: "6px 8px",
  backgroundColor: dsc.color.primaryLight,
  overflowX: "auto",
};

export interface IHttpViewProps {
  request: AxiosRequestConfig & { form?: any };
}

export function HttpRequestView({ request }: IHttpViewProps) {
  return (
    <div css={[httpCardWrapStyle, { whiteSpace: "nowrap" }]}>
      <div>
        <HttpFirstLine params={request.params} method={request.method} baseURL={request.baseURL} url={request.url} />
      </div>
      <div css={{ marginTop: 12 }}>
        {map(sortObject(assign(getDefaultHeads(), request.headers)), (value: string, key: string) => (
          <HeadRow key={key} field={key} value={value} />
        ))}
      </div>
      {request.data && (
        <pre>
          <code>{stringifyBody(request)}</code>
        </pre>
      )}
    </div>
  );
}
