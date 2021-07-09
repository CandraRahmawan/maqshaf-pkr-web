import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    fallbackLng: "id",
    lng: "id",
    interpolation: {
      escapeValue: false,
    },
    ns: ["common"],
    defaultNS: "common",
  });

export default i18n;
