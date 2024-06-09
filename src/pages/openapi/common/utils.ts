import { map, replace } from "lodash-es";

import { urlRegex } from "@/core/regex";
import { lightTheme } from "@/core/style/defaultStyleConfig";

import { MethodType } from "./config";
import { IMethodType } from "./type";

export function getMethodColor(method: IMethodType) {
  const cyanBlueColor = "#00EEEE";
  const purpleColor = "#68228B";

  switch (method) {
    case MethodType.get:
      return lightTheme.color.primary;
    case MethodType.post:
      return lightTheme.color.success;
    case MethodType.put:
      return lightTheme.color.warning;
    case MethodType.patch:
      return purpleColor;
    case MethodType.delete:
      return lightTheme.color.danger;
    default:
      return cyanBlueColor;
  }
}

const statusError = /@StatusErr\[(.+)\]\[(.+)\]\[(.+)\](!)?/;

export interface IStatusError {
  name: string;
  code: number;
  msg: string;
  canBeTalkError: boolean;
}

export function pickHttpError(list: string[] = []) {
  return map(list, (s) => {
    const values = statusError.exec(s);

    if (values != null) {
      return {
        code: parseInt(values[2], 10),
        name: values[1],
        msg: values[3],
        canBeTalkError: !!values[4],
      };
    }

    return {} as IStatusError;
  });
}

export function getHttpErrorDes(s = "") {
  return replace(s, new RegExp(statusError, "g"), "");
}

export const getCodeColor = (code: number) => {
  if (code >= 400) {
    return lightTheme.color.danger;
  }

  if (code >= 300) {
    return lightTheme.color.warning;
  }

  return lightTheme.color.success;
};

export function withoutBubble(callback: () => void) {
  return (e: React.SyntheticEvent<any>) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    callback();
  };
}

export function getAxiosBasePathByUrl(url: string) {
  if (!url) {
    return "//serviceURL";
  }

  let basePath = "";

  if (urlRegex.test(url)) {
    const tmpStrs = url.split("//");
    basePath = `${tmpStrs[0]}//${tmpStrs[1].split("/")[0]}`;
  }

  return basePath;
}
