import { ThemeProvider } from "@emotion/react";
import React from "react";

import { useConfigInfoStore } from "../store";
import { darkTheme, lightTheme } from "./defaultStyleConfig";
import { ThemeType } from "./themeConfig";

export default function ThemeWrap({ children }: { children: React.ReactNode }) {
  const { configInfo } = useConfigInfoStore();
  const themeType = configInfo?.theme;

  return <ThemeProvider theme={themeType === ThemeType.dark ? darkTheme : lightTheme}>{children}</ThemeProvider>;
}
