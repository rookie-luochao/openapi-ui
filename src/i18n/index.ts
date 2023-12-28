import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import resources, { LangType } from "./config";

i18next.use(initReactI18next).init({
  fallbackLng: LangType.en,
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources,
});
