import { UploadFile } from "antd/es/upload/interface";

export interface IBasicImport {
  serviceURL: string;
}

export type IURLImport = IBasicImport;

export type IFileImport = Pick<IBasicImport, "serviceURL"> & { file: UploadFile[] };

export type ITextImport = Pick<IBasicImport, "serviceURL"> & { openapiTextContent: string };
