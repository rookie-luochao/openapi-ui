import { UploadFile } from "antd/es/upload/interface";
import { Dayjs } from "dayjs";
import i18n from "../i18n";

export enum TimeType {
  dateTimeUnix = "dateTimeUnix",
  dateUnix = "dateUnix",
  dateTime = "dateTime",
  date = "date",
}

export enum FullTimeType {
  dateTime = "dateTime",
  dateTimeUnix = "dateTimeUnix",
}

type ITimeType = keyof typeof TimeType;

export const displayTimeType = (field: ITimeType) => {
  return {
    [TimeType.dateTime]: i18n.t("postman.dateTime"),
    [TimeType.date]: i18n.t("postman.date"),
    [TimeType.dateTimeUnix]: i18n.t("postman.dateTimeUnix"),
    [TimeType.dateUnix]: i18n.t("postman.dateUnix"),
  }[field];
};

export enum CustomTimeField {
  fieldName = "fieldName",
  fieldType = "fieldType",
  fieldValue = "fieldValue",
}

export type ICustomTimeField = keyof typeof CustomTimeField;

export interface ICustomTime {
  fieldName: string;
  fieldType: ITimeType;
  fieldValue: Dayjs;
}

export enum UploadFileType {
  single = "single",
  multiple = "multiple",
}

type IUploadFileType = keyof typeof UploadFileType;

export const displayUploadFileType = (field: IUploadFileType) => {
  return {
    [UploadFileType.single]: i18n.t("postman.single"),
    [UploadFileType.multiple]: i18n.t("postman.multiple"),
  }[field];
};

export enum CustomFileField {
  fieldName = "fieldName",
  fieldType = "fieldType",
  fieldValue = "fieldValue",
}

export type ICustomFileField = keyof typeof CustomFileField;

export interface ICustomFile {
  fieldName: string;
  fieldType: IUploadFileType;
  fieldValue: UploadFile[];
}
