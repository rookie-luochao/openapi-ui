import { FileAddOutlined, FileTextOutlined, LinkOutlined } from "@/components/icon";

export enum ImportModeType {
  url = "url",
  file = "file",
  text = "text",
}

export type IImportModeType = keyof typeof ImportModeType;

export const displayImportModeType = (field: IImportModeType) => {
  return {
    url: "login.urlModeImport",
    file: "login.fileModeImport",
    text: "login.textModeImport",
  }[field];
};

export const displayImportModeTypeIcon = (field: IImportModeType, fill: string) => {
  return {
    url: <LinkOutlined fill={fill} />,
    file: <FileAddOutlined fill={fill} />,
    text: <FileTextOutlined fill={fill} />,
  }[field];
};
