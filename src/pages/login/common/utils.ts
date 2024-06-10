import * as yaml from "js-yaml";
import { isEmpty, isObject } from "lodash-es";
import { Dictionary } from "react-router-toolkit";
import * as converter from "swagger2openapi";

import { IOpenAPI } from "@/type";

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

function convertSwaggerToOpenApi(swagger: Dictionary<any>) {
  if (!swagger.swagger) {
    return swagger;
  }

  return new Promise<{ openapi: IOpenAPI }>((resolve, reject) => {
    const options = { patch: true, warnOnly: true, resolveInternal: true };
    // options.patch = true; // fix up small errors in the source definition
    // options.warnOnly = true; // Do not throw on non-patchable errors
    // options.warnOnly = true; // enable resolution of internal $refs, also disables deduplication of requestBodies
    converter.convertObj(swagger as any, options, function (err: any, options: any) {
      // options.openapi contains the converted definition
      if (err) {
        reject(err);
        return;
      }

      console.log("openapi", options);
      options.openapi["x-original-swagger-version"] = options.original.swagger;
      resolve({ openapi: options.openapi });
    });
  });
}

export async function parseSwaggerOrOpenapi(content: string | IOpenAPI) {
  let openapi = {} as IOpenAPI;

  if (isObject(content)) {
    openapi = content;

    // if is swagger2.0 json, covert swagger2.0 to openapi3.0
    if (!openapi.openapi) {
      const converted = (await convertSwaggerToOpenApi(openapi)) || {};

      if (!isEmpty(converted.openapi)) {
        openapi = converted.openapi;
      }
    }
  } else {
    if (isJSONString(content)) {
      openapi = JSON.parse(content);

      if (!openapi.openapi) {
        const converted = (await convertSwaggerToOpenApi(openapi)) || {};

        if (!isEmpty(converted.openapi)) {
          openapi = converted.openapi;
        }
      }
    } else {
      openapi = yaml.load(content) as IOpenAPI;

      if (!openapi.openapi) {
        const converted = (await convertSwaggerToOpenApi(openapi)) || {};

        if (!isEmpty(converted.openapi)) {
          openapi = converted.openapi;
        }
      }
    }
  }

  return openapi;
}
