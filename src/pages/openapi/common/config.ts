import { map, toUpper } from "lodash-es";

export enum MethodType {
  get = "get",
  post = "post",
  put = "put",
  patch = "patch",
  delete = "delete",
  options = "options",
  head = "head",
}

export const methodOptions = map(MethodType, (method) => ({
  label: toUpper(method),
  value: method,
}));

export const parameterPositionMap = {
  path: "URL Path",
  header: "Header",
  query: "Query",
  body: "Body",
  cookie: "Cookie",
  formData: "Form Data",
};
