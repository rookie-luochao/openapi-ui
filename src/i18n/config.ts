import headEn from "./lang/head.en";
import headZh from "./lang/head.zh";
import loginEn from "./lang/login.en";
import loginZh from "./lang/login.zh";
import openapiEn from "./lang/openapi.en";
import openapiZh from "./lang/openapi.zh";
import postmanEn from "./lang/postman.en";
import postmanZh from "./lang/postman.zh";

export enum LangType {
  en = "en",
  zh = "zh",
}

const resources = {
  [LangType.en]: {
    translation: {
      head: headEn,
      login: loginEn,
      openapi: openapiEn,
      postman: postmanEn,
    },
  },
  [LangType.zh]: {
    translation: {
      head: headZh,
      login: loginZh,
      openapi: openapiZh,
      postman: postmanZh,
    },
  },
};

export default resources;
