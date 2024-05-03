import { ConfigProvider /* , theme */ } from "antd";
import enUS from "antd/locale/en_US";
import zhCN from "antd/locale/zh_CN";
import { useTranslation } from "react-i18next";
import { useConfigInfoStore } from "../../core/store";
import { darkTheme, dsc } from "../../core/style/defaultStyleConfig";
import { LangType } from "../../i18n/config";

export function AntdConfigProviderWrap({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const { configInfo } = useConfigInfoStore();
  const isDarkTheme = configInfo?.theme === "dark";

  const lightThemeColorMap = {
    fontSize: dsc.fontSize.xs,
  };

  const darkThemeColorMap = {
    fontSize: dsc.fontSize.xs,
    colorBgContainer: darkTheme.color.descCardBg,
    colorText: darkTheme.color.textLight,
    colorTextPlaceholder: darkTheme.color.textLight,
    colorBorder: darkTheme.color.border,
    colorTextQuaternary: darkTheme.color.textLight,
  };

  return (
    <ConfigProvider
      locale={i18n?.resolvedLanguage === LangType.zh ? zhCN : enUS}
      theme={{
        // algorithm: theme.darkAlgorithm,
        components: {
          Layout: {
            siderBg: darkTheme.color.bg,
            triggerBg: darkTheme.color.bg,
            triggerColor: darkTheme.color.title,
          },
          Form: isDarkTheme ? { ...lightThemeColorMap, labelColor: darkTheme.color.textLight } : lightThemeColorMap,
          Input: isDarkTheme ? darkThemeColorMap : lightThemeColorMap,
          InputNumber: isDarkTheme ? darkThemeColorMap : lightThemeColorMap,
          Radio: isDarkTheme ? { colorText: darkTheme.color.textLight } : lightThemeColorMap,
          Popover: isDarkTheme
            ? {
                colorBgElevated: darkTheme.color.bg,
              }
            : {},
          Modal: isDarkTheme
            ? {
                colorBgElevated: darkTheme.color.bgGray,
                titleColor: darkTheme.color.title,
              }
            : {},
          Tabs: isDarkTheme
            ? {
                colorBgContainer: darkTheme.color.descCardBg,
                colorText: darkTheme.color.textLight,
                colorBorderSecondary: darkTheme.color.border,
                cardBg: darkTheme.color.bgGray,
                colorTextDescription: darkTheme.color.textLight,
                itemActiveColor: darkTheme.color.textLight,
              }
            : {},
          Button: isDarkTheme
            ? {
                ...darkThemeColorMap,
                colorBgContainerDisabled: darkTheme.color.descCardBg,
                colorTextDisabled: darkTheme.color.textLight,
                fontSize: dsc.fontSize.xxs,
              }
            : { fontSize: dsc.fontSize.xxs },
          Upload: isDarkTheme
            ? {
                ...lightThemeColorMap,
                colorText: darkTheme.color.textLight,
                actionsColor: darkTheme.color.textLight,
                colorTextDescription: darkTheme.color.textLight,
                controlItemBgHover: darkTheme.color.descCardBg,
              }
            : lightThemeColorMap,
          Select: isDarkTheme
            ? {
                ...darkThemeColorMap,
                colorBgElevated: darkTheme.color.bg,
                optionActiveBg: darkTheme.color.descCardBg,
                optionSelectedBg: darkTheme.color.descCardBg,
                multipleItemBg: darkTheme.color.bgGray,
              }
            : lightThemeColorMap,
          Dropdown: isDarkTheme
            ? {
                ...darkThemeColorMap,
                colorBgElevated: darkTheme.color.bg,
                controlItemBgHover: darkTheme.color.descCardBg,
              }
            : lightThemeColorMap,
          DatePicker: isDarkTheme
            ? {
                ...darkThemeColorMap,
                colorBgElevated: darkTheme.color.bg,
                colorTextHeading: darkTheme.color.textLight,
                controlItemBgHover: darkTheme.color.descCardBg,
                controlItemBgActive: darkTheme.color.descCardBg,
                colorTextDisabled: darkTheme.color.textLight,
              }
            : lightThemeColorMap,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
