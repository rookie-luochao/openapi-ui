import { UploadFile } from "antd/es/upload/interface";
import { reduce } from "lodash-es";
import { Dictionary } from "react-router-toolkit";

import { ICustomFile, ICustomTime } from "./config";

export function getCustomTimes(customTimeList: ICustomTime[]) {
  if (!customTimeList || !customTimeList.length) {
    return {};
  }

  const customParams = reduce(
    customTimeList,
    (pre, item) => {
      if (item?.fieldValue) {
        pre[item?.fieldName] = item?.fieldType.toLocaleLowerCase().includes("unix")
          ? item?.fieldValue.unix()
          : item?.fieldValue.toISOString();
      }

      return pre;
    },
    {} as Dictionary<string | number>,
  );

  return customParams;
}

export function getCustomFiles(customFileList: ICustomFile[]) {
  if (!customFileList || !customFileList.length) {
    return {};
  }

  const customParams = reduce(
    customFileList,
    (pre, item) => {
      if (item?.fieldValue) {
        pre[item?.fieldName] = item?.fieldType === "single" ? item?.fieldValue[0] : item?.fieldValue;
      }

      return pre;
    },
    {} as Dictionary<string | UploadFile | UploadFile[]>,
  );

  return customParams;
}
