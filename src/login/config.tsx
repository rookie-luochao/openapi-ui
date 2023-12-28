import { FileAddOutlined, FileTextOutlined, LinkOutlined } from "@ant-design/icons";

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

export const displayImportModeTypeIcon = (field: IImportModeType) => {
  return {
    url: <LinkOutlined />,
    file: <FileAddOutlined />,
    text: <FileTextOutlined />,
  }[field];
};
