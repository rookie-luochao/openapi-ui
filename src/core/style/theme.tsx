import { ThemeProvider, useTheme } from "@emotion/react";
import { ThemeIcon } from "../../components/icon";
import { useConfigInfoStore } from "../store";
import { ITheme, darkTheme, lightTheme } from "./defaultStyleConfig";

export enum ThemeType {
  light = "light",
  dark = "dark",
}

export type IThemeType = keyof typeof ThemeType;

export function ThemeWrap({ children }: { children: React.ReactNode }) {
  const { configInfo } = useConfigInfoStore();
  const themeType = configInfo?.theme;

  return <ThemeProvider theme={themeType === ThemeType.dark ? darkTheme : lightTheme}>{children}</ThemeProvider>;
}

export function SwitchTheme() {
  const themeConf = useTheme() as ITheme;
  const { configInfo, updateConfigInfo } = useConfigInfoStore();
  const { theme } = configInfo || { theme: ThemeType.light };

  return (
    <a
      css={{ cursor: "pointer", opacity: 0.6, "&:hover": { opacity: 1 } }}
      onClick={() =>
        updateConfigInfo({ ...configInfo, theme: theme === ThemeType.light ? ThemeType.dark : ThemeType.light })
      }
    >
      <ThemeIcon fill={themeConf.color.text} />
    </a>
  );
}
