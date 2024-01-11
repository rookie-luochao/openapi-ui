import { notification } from "antd";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { MethodType } from "../../openapi/type";
import { IConfigInfoStorageState, configInfoStorageKey, defaultConfigInfoStorage } from "../store";

export function getConfigInfo() {
  const configInfoStorageStr = globalThis.localStorage.getItem(configInfoStorageKey);
  const configInfoStorage = configInfoStorageStr
    ? (JSON.parse(configInfoStorageStr) as IConfigInfoStorageState)
    : defaultConfigInfoStorage;

  return configInfoStorage.state.configInfo;
}

export const defaultTimeout = 120;

export function request(axiosConfig: AxiosRequestConfig) {
  let timeout = defaultTimeout * 1000; // default request timeout is 120000 millisecond
  const configInfo = getConfigInfo();

  if (configInfo) {
    timeout = configInfo.timeout * 1000;
  }

  return axios({
    method: MethodType.get,
    timeout: timeout,
    headers: {
      "Content-Type": "application/json",
    },
    ...axiosConfig,
  }).catch((reason) => {
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
