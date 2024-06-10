import { keys } from "lodash-es";

import { IRequestBody } from "@/type";

export function getRequestBodyContent(requestBody: IRequestBody) {
  const contentKeys = keys(requestBody.content);
  let content = requestBody.content;

  if (contentKeys.length > 1) {
    if (contentKeys.includes("application/json")) {
      content = { "application/json": content["application/json"] };
    } else if (contentKeys.includes("multipart/form-data")) {
      content = { "multipart/form-data": content["multipart/form-data"] };
    } else if (contentKeys.includes("application/x-www-form-urlencoded")) {
      content = { "application/x-www-form-urlencoded": content["application/x-www-form-urlencoded"] };
    } else {
      content = { [contentKeys[0]]: content[contentKeys[0]] };
    }
  }

  return content || {};
}
