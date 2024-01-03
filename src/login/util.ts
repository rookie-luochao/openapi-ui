import { message } from "antd";
import * as yaml from "js-yaml";
import { isEmpty, isObject } from "lodash-es";
import { Dictionary } from "react-router-toolkit";
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

function isJSONString(str: string) {
  try {
    JSON.parse(str);
    return true;
  } catch (error) {
    return false;
  }
}

async function convertSwaggerToOpenApi(swagger: Dictionary<any>) {
  if (!swagger.swagger) {
    return swagger;
  }
  console.log("swagger: ", swagger);
  const converter = (globalThis as any).APISpecConverter;

  if (!converter) {
    message.warning("the cdn converting swagger2 to openapi3 was not loaded successfully, please check!");
    return;
  }

  return new Promise<{ openapi: IOpenAPI }>((resolve, reject) => {
    converter.convert(
      {
        from: "swagger_2",
        to: "openapi_3",
        source: swagger,
      },
      function (err: any, converted: Dictionary<any>) {
        if (err) {
          reject(err);
          return;
        }

        resolve({
          openapi: converted.spec || {},
        });
      },
    );
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
