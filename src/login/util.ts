import * as yaml from "js-yaml";
import { isObject } from "lodash-es";
import { IOpenAPI } from "../openapi/type";

export function readFileContent(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (event) {
      const fileData = event.target?.result;

      if (fileData) {
        resolve(fileData as string);
      } else {
        reject("error");
      }
    };

    reader.readAsText(file, "utf-8");
  });
}

export function isJSONString(str: string) {
  try {
    JSON.parse(str);
    return true;
  } catch (error) {
    return false;
  }
}

export function parseOpenapi(openapiInfo: IOpenAPI) {
  let openapi = {} as IOpenAPI;

  try {
    if (isObject(openapiInfo)) {
      openapi = openapiInfo;
    } else {
      openapi = yaml.load(openapiInfo) as IOpenAPI;
    }
  } catch (e) {
    console.log("parse failed, please check api response openapi.json/openapi.yml text format correctness");
  }

  return openapi;
}
