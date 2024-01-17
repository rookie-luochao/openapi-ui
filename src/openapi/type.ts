import { OpenAPI, OpenAPIV3, OpenAPIV3_1 } from "openapi-types";
import { Dictionary } from "react-router-toolkit";

export type IOpenAPI = OpenAPI.Document & Dictionary<any>;

export type IOperation = OpenAPI.Operation<Dictionary<any>>;

type ISchemaV3 = OpenAPIV3.SchemaObject & Dictionary<any>;
type ISchemaV3_1 = OpenAPIV3_1.SchemaObject & Dictionary<any>;
export type ISchema = ISchemaV3 | ISchemaV3_1;

type IParameterV3 = OpenAPIV3.ParameterObject & Dictionary<any>;
type IParameterV3_1 = OpenAPIV3_1.ParameterObject & Dictionary<any>;
export type TParameter = IParameterV3 | IParameterV3_1;

export type IEncoding = OpenAPIV3.EncodingObject | OpenAPIV3_1.EncodingObject;

export type IMediaType = OpenAPIV3.MediaTypeObject | OpenAPIV3_1.MediaTypeObject;

export type IResponses = Record<string, IReference | IResponse>;

type IReferenceV3 = OpenAPIV3.ReferenceObject & Dictionary<any>;
type IReferenceV3_1 = OpenAPIV3_1.ReferenceObject & Dictionary<any>;
export type IReference = IReferenceV3 | IReferenceV3_1;

type IResponseV3 = OpenAPIV3.ResponseObject & Dictionary<any>;
type IResponseV3_1 = OpenAPIV3_1.ResponseObject & Dictionary<any>;
export type IResponse = IResponseV3 | IResponseV3_1;

type IPathsV3 = OpenAPIV3.PathsObject & Dictionary<any>;
type IPathsV3_1 = OpenAPIV3_1.PathsObject & Dictionary<any>;
export type IPaths = IPathsV3 | IPathsV3_1;

export enum MethodType {
  get = "get",
  post = "post",
  put = "put",
  patch = "patch",
  delete = "delete",
  options = "options",
  head = "head",
}

export type IMethodType = keyof typeof MethodType;

interface IOperationExtra {
  method: IMethodType;
  path: string;
  basePath?: string;
  group?: string;
}

export type IRequestBody = {
  content: Dictionary<IMediaType>;
  required: boolean;
};

export type IOperationEnhance = IOperationExtra &
  IOperation & {
    requestBody?: IRequestBody;
  };

export type IOperationEnhanceMap = Dictionary<IOperationEnhance>;
