import { AxiosRequestConfig } from "axios";
import { isEmpty } from "lodash-es";
import { fullUrlRegex } from "../core/regex";

interface IRequest extends Pick<AxiosRequestConfig, "baseURL" | "url" | "method" | "headers" | "params" | "data"> {}

export function getRequestByValues(req: IRequest = {}) {
  if (!req.url) {
    return req;
  }

  const [baseURL, URL] = getAxiosBaseURLAndURL(req.url);
  req.baseURL = baseURL;
  req.url = URL;
  const contentType = req?.headers?.["Content-Type"] || "application/json";

  req?.headers?.["Referer"] && delete req?.headers["Referer"];

  if (!isEmpty(req?.data)) {
    req.headers = {
      ...(req?.headers || {}),
      "Content-Type": contentType + ";charset=UTF-8",
    };
  }
  console.log("req:", req);

  return req;
}

function getAxiosBaseURLAndURL(url: string) {
  if (!url || !fullUrlRegex.test(url)) {
    return ["//serviceURL", "/URL"];
  }

  const tmpStrs = url.split("//");
  const tmpStrs2 = tmpStrs[1].split("/");
  const baseURL = `${tmpStrs[0]}//${tmpStrs2[0]}`;
  const URL = `/${tmpStrs2.slice(1).join("/")}`;

  return [baseURL, URL];
}
