import appConfig, { IConfig } from "@/config";

export function getConfig(): IConfig {
  const mateEnv = import.meta.env;
  const defaultAppConfig = {
    appName: mateEnv?.VITE_appName || "",
    appNameZH: mateEnv?.VITE_appNameZH || "",
    baseURL: mateEnv?.VITE_baseURL || "",
    version: mateEnv?.VITE_version || "",
    env: mateEnv?.VITE_env || "",
  };

  // dev mode get env var by src/config.ts file, prod mode get env var by mate, write the mate tag of HTML through docker arg var
  // mate tag name is：app_config, content format is：appName=webapp,baseURL=https://api.com,env=,version=
  if (import.meta.env.DEV) {
    return appConfig;
  } else {
    const appConfigStr = getMeta("app_config");

    if (!appConfigStr) return defaultAppConfig;

    return parseEnvVar(appConfigStr);
  }
}

function getMeta(metaName: string) {
  const metas = document.getElementsByTagName("meta");

  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute("name") === metaName) {
      return metas[i].getAttribute("content");
    }
  }

  return "";
}

function parseEnvVar(envVarURL: string) {
  const arrs = envVarURL.split(",");

  return arrs.reduce((pre, item) => {
    const keyValues = item.split("=");

    return {
      ...pre,
      [keyValues[0]]: keyValues[1],
    };
  }, {} as IConfig);
}
