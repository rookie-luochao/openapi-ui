import { useTheme } from "@emotion/react";

import { ThemeIcon } from "../../components/icon";
import { useConfigInfoStore } from "../store";
import { ITheme } from "./defaultStyleConfig";
import { ThemeType } from "./themeConfig";

export default function SwitchTheme() {
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
