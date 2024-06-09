import { useTheme } from "@emotion/react";
import { AxiosRequestConfig } from "axios";
import { assign, isEmpty, isUndefined, keys, map, omitBy, pick, pickBy, sortBy, toUpper } from "lodash-es";
import { Dictionary, toQueryString } from "react-router-toolkit";

import { ITheme } from "@/core/style/defaultStyleConfig";
import { httpCardWrapStyle } from "@/pages/openapi/common/style";

// import { stringifyBody } from "./httpRequestUtils";

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
    <span style={{ display: "block" }}>
      <span style={{ fontWeight: "bold", marginRight: "0.5em" }}>{field}:</span>
      <span>{value}&nbsp;&nbsp;&nbsp;</span>
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
  const lastQueries = pickBy(params, (v) => !!v);

  return `${url}${getNeedQuery(lastQueries as any)}`;
}

function HttpFirstLine({ method, url, baseURL, params }: AxiosRequestConfig) {
  return (
    <span style={{ fontWeight: "bold" }}>
      {toUpper(method)}
      &nbsp;&nbsp;
      <span style={{ fontWeight: "normal" }}>{buildOriginalUrl((baseURL || "") + url, params)}</span>
      &nbsp;&nbsp;HTTP/1.1&nbsp;&nbsp;&nbsp;
    </span>
  );
}

export interface IHttpViewProps {
  request: AxiosRequestConfig;
}

export function HttpRequestView({ request = {} }: IHttpViewProps) {
  const theme = useTheme() as ITheme;

  return (
    <div
      style={{
        ...httpCardWrapStyle,
        color: theme.color.menuItem,
        backgroundColor: theme.color.primaryLight,
        whiteSpace: "nowrap",
      }}
    >
      <div>
        <HttpFirstLine baseURL={request.baseURL} method={request.method} params={request.params} url={request.url} />
      </div>
      <div style={{ marginTop: 12 }}>
        {map(sortObject(assign(getDefaultHeads(), request.headers)), (value: string, key: string) => (
          <HeadRow key={key} field={key} value={value} />
        ))}
      </div>
      {/* {!isEmpty(pickBy(request.data, (v) => !!v)) && (
        <pre>
          <code>{stringifyBody(request)}</code>
        </pre>
      )} */}
    </div>
  );
}
