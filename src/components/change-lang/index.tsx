import { useTheme } from "@emotion/react";
import { Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import { ITheme } from "../../core/style/defaultStyleConfig";
import { LangType } from "../../i18n/config";

const LangIcon = ({ size = "16", fill = "#333", ...other }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...other}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="m12.87 15.07-2.54-2.51.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7 1.62-4.33L19.12 17h-3.24z"
        fill={fill}
      />
    </svg>
  );
};

export function ChangeLangComp() {
  const { t, i18n } = useTranslation();
  const theme = useTheme() as ITheme;

  return (
    <Dropdown
      menu={{
        items: [
          {
            key: "0",
            label: t("head.en"),
            onClick() {
              i18n.changeLanguage(LangType.en);
            },
          },
          {
            key: "1",
            label: t("head.zh"),
            onClick() {
              i18n.changeLanguage(LangType.zh);
            },
          },
        ],
      }}
    >
      <a css={{ cursor: "pointer", opacity: 0.6, "&:hover": { opacity: 1 } }} onClick={(e) => e.preventDefault()}>
        <LangIcon fill={theme.color.text} />
      </a>
    </Dropdown>
  );
}
