import { UploadFile } from "antd/es/upload/interface";
import { Dayjs } from "dayjs";
import { map } from "lodash-es";

export enum TimeType {
  dateTime = "dateTime",
  date = "date",
  dateTimeUnix = "dateTimeUnix",
  dateUnix = "dateUnix",
}

export enum FullTimeType {
  dateTime = "dateTime",
  dateTimeUnix = "dateTimeUnix",
}

type ITimeType = keyof typeof TimeType;

const displayTimeType = (field: ITimeType) => {
  return {
    [TimeType.dateTime]: "dateTime",
    [TimeType.date]: "date",
    [TimeType.dateTimeUnix]: "dateTimeUnix",
    [TimeType.dateUnix]: "dateUnix",
  }[field];
};

export const timeTypeOptions = map(TimeType, (item) => ({
  label: displayTimeType(item),
  value: item,
}));

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

const displayUploadFileType = (field: IUploadFileType) => {
  return {
    [UploadFileType.single]: "single",
    [UploadFileType.multiple]: "multiple",
  }[field];
};

export const uploadFileTypeOptions = map(UploadFileType, (item) => ({
  label: displayUploadFileType(item),
  value: item,
}));

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
