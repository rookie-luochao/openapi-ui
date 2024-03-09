import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import resources, { LangType } from "./config";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: LangType.en,
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18next;
