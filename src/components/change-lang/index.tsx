import { Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import langIcon from "../../assets/images/lang.svg";
import { LangType } from "../../i18n/config";

export function ChangeLangComp() {
  const { t, i18n } = useTranslation();

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
      <a css={{ lineHeight: "10px", cursor: "pointer" }} onClick={(e) => e.preventDefault()}>
        <img src={langIcon} css={{ width: 16, height: 16, opacity: 0.6 }} alt="lang" />
      </a>
    </Dropdown>
  );
}
