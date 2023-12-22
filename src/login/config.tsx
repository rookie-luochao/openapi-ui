import { FileAddOutlined, FileTextOutlined, LinkOutlined } from "@ant-design/icons";

export enum ImportModeType {
  url = "url",
  file = "file",
  text = "text",
}

export type IImportModeType = keyof typeof ImportModeType;

export const displayImportModeType = (field: IImportModeType) => {
  return {
    url: "url mode import",
    file: "file mode import",
    text: "text mode import",
  }[field];
};

export const displayImportModeTypeIcon = (field: IImportModeType) => {
  return {
    url: <LinkOutlined />,
    file: <FileAddOutlined />,
    text: <FileTextOutlined />,
  }[field];
};

export const serviceURLLabel = "service url, for example: https://www.google.com";
export const serviceURLPlaceholder = "please enter service url";
export const requiredFieldPlaceholder = "please enter required field";
