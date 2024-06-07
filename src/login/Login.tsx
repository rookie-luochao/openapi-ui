import { useTheme } from "@emotion/react";
import { map, throttle } from "lodash-es";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ParsedUrlQuery, useRouterQuery } from "react-router-toolkit";

import backgroundImage from "../assets/images/login-bg.svg";
import LogoIcon from "../assets/images/logo.png";
import { ChangeLangComp } from "../components/change-lang";
import GithubStar from "../components/github-star";
import { GoToPostman, defaultHeadTitleHeight } from "../components/head/common";
import { ICPRegistration } from "../components/icp-registration";
import { Env } from "../config";
import { getConfig } from "../core/http/config";
import SwitchTheme from "../core/style/ThemeSwitch";
import { ITheme, dsc, lightTheme } from "../core/style/defaultStyleConfig";
import { flexBetweenCenterOpts, flexCenterOpts, flexOpts } from "../core/style/utils";
import { FileImportView } from "./ImportByFileView";
import { TextImportView } from "./ImportByTextView";
import { URLImportView } from "./ImportByURLView";
import { IImportModeType, ImportModeType, displayImportModeType, displayImportModeTypeIcon } from "./config";

interface ILoginQuery extends ParsedUrlQuery {
  activeImportModeType: IImportModeType;
}

export default function Login() {
  const [{ activeImportModeType = ImportModeType.url }, setQuery] = useRouterQuery<ILoginQuery>();
  const { t } = useTranslation();
  const theme = useTheme() as ITheme;
  const [contentHeight, setContentHeight] = useState(document.documentElement.clientHeight);
  const isZh = getConfig().env === Env.zh;

  const throttledResizeHandler = throttle(
    () => {
      setContentHeight(globalThis.document.documentElement.clientHeight);
    },
    1200,
    { leading: true, trailing: true },
  );

  useEffect(() => {
    globalThis.addEventListener("resize", throttledResizeHandler);

    return () => {
      globalThis.removeEventListener("resize", throttledResizeHandler);
    };
  }, [throttledResizeHandler]);

  return (
    <div
      style={{
        minHeight: contentHeight,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundColor: theme.color.bg,
        color: theme.color.menuItem,
      }}
    >
      <div style={{ minHeight: document.documentElement.clientHeight - 32 }}>
        <div css={[flexBetweenCenterOpts(), { minWidth: 1200, height: defaultHeadTitleHeight, padding: "0px 30px" }]}>
          <img alt="openapi-ui" src={LogoIcon} style={{ width: 128 }} />
          <div css={{ display: "flex", "& > *": { marginLeft: 4, ...flexCenterOpts() } }}>
            <SwitchTheme />
            <ChangeLangComp />
            <GoToPostman />
            <GithubStar />
          </div>
        </div>
        <div style={{ width: 1200, margin: "0px auto", paddingTop: 128 }}>
          <div
            css={[
              flexCenterOpts(),
              {
                fontSize: dsc.fontSize.s,
                marginBottom: 36,
                "& > * + *": {
                  marginLeft: 6,
                },
              },
            ]}
          >
            {map(ImportModeType, (item) => (
              <a
                key={item}
                css={[
                  flexOpts({ alignItems: "center" }),
                  {
                    width: 150,
                    height: 32,
                    border: `1px solid ${theme.color.border}`,
                    borderRadius: 6,
                    padding: "0px 6px",
                    cursor: "pointer",
                  },
                  activeImportModeType === item
                    ? {
                        backgroundColor: lightTheme.color.primary,
                        color: lightTheme.color.bg,
                        border: "none",
                        "& path": {
                          fill: theme.color.menuGroup,
                        },
                      }
                    : {},
                ]}
                onClick={() => {
                  setQuery(() => ({
                    activeImportModeType: item,
                  }));
                }}
              >
                {displayImportModeTypeIcon(item, theme.color.textLight)}
                <span style={{ marginLeft: 10 }}>{t(displayImportModeType(item))}</span>
              </a>
            ))}
          </div>
          <div css={flexCenterOpts()}>
            <div style={{ width: 600 }}>
              {activeImportModeType === ImportModeType.url && <URLImportView />}
              {activeImportModeType === ImportModeType.file && <FileImportView />}
              {activeImportModeType === ImportModeType.text && <TextImportView />}
            </div>
          </div>
        </div>
      </div>
      {isZh && <ICPRegistration />}
    </div>
  );
}
