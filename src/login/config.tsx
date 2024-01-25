import FileAddOutlined from "../assets/images/file.svg";
import LinkOutlined from "../assets/images/link.svg";
import FileTextOutlined from "../assets/images/text.svg";

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
    url: <img src={LinkOutlined} alt="url" />,
    file: <img src={FileAddOutlined} alt="json-file" />,
    text: <img src={FileTextOutlined} alt="text" />,
  }[field];
};
