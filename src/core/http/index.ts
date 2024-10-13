import { notification } from "antd";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { filter, findIndex, isString, keys, map, pickBy, values } from "lodash-es";

import { isJSONString } from "@/pages/login/common/utils";
import { MethodType } from "@/pages/openapi/common/config";

import { IConfigInfoStorageState, configInfoStorageKey, defaultConfigInfoStorage } from "../store";

export function getConfigInfo() {
  const configInfoStorageStr = globalThis.sessionStorage.getItem(configInfoStorageKey);
  const configInfoStorage = configInfoStorageStr
    ? (JSON.parse(configInfoStorageStr) as IConfigInfoStorageState)
    : defaultConfigInfoStorage;

  return configInfoStorage.state.configInfo;
}

export const defaultTimeout = 120;

export function request(axiosConfig: AxiosRequestConfig) {
  let timeout = defaultTimeout * 1000; // default request timeout is 120000 millisecond
  const configInfo = getConfigInfo();

  if (configInfo?.timeout) {
    timeout = configInfo.timeout * 1000;
  }

  axiosConfig = {
    method: MethodType.get,
    timeout: timeout,
    ...axiosConfig,
    headers: {
      Authorization: configInfo?.authorization,
      ...(axiosConfig.headers || {}),
    },
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    //   ...(axiosConfig.headers || {}),
    // },
  };
  console.log("axiosConfig", axiosConfig);

  if (~findIndex(values(axiosConfig.params), (item) => Array.isArray(item))) {
    axiosConfig.paramsSerializer = (params) => {
      return filter(
        map(keys(pickBy(params, (value) => !!value)), (key) => {
          const value = params[key];

          if (Array.isArray(value)) {
            const newArr = map(
              filter(value, (item) => !!item),
              (val) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`,
            );

            return newArr.join("&");
          } else {
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
          }
        }),
        (item) => !!item,
      ).join("&");
    };
  }

  if (axiosConfig.data && isString(axiosConfig.data) && !isJSONString(axiosConfig.data)) {
    return Promise.reject();
  }

  return axios(axiosConfig).catch((reason) => {
    const resData = reason?.response?.data;
    notification.error({
      message:
        resData?.message ||
        resData?.msg ||
        resData ||
        reason?.response?.statusText ||
        reason?.message ||
        "api request is error, please check",
      duration: 2,
    });

    return reason.response as AxiosResponse;
  });
}
