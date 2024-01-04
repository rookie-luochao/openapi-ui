export interface IConfig {
  appName: string;
  appNameZH: string;
  baseURL: string;
  version?: string;
  env?: string;
}

const appConfig: IConfig = {
  appName: "openAPI UI",
  appNameZH: "简洁美观的接口文档",
  baseURL: "https://host",
  version: "",
  env: "en", // en or zh
};

export default appConfig;
