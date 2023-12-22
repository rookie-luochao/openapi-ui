export interface IConfig {
  appName: string;
  baseURL: string;
  version?: string;
  env?: string;
}

const appConfig: IConfig = {
  appName: "openapi-ui",
  baseURL: "",
  version: "",
  env: "demo",
};

export default appConfig;
