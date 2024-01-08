import { map } from "lodash-es";
import { useTranslation } from "react-i18next";
import { ParsedUrlQuery, useRouterQuery } from "react-router-toolkit";
import LogoIcon from "../assets/images/logo.png";
import GithubStar from "../components/github-star";
import { ChangeLangComp } from "../components/head";
import { ICPRegistration } from "../components/icp-registration";
import { Env } from "../config";
import { getConfig } from "../core/http/config";
import { dsc } from "../core/style/defaultStyleConfig";
import { flexBetweenCenterOpts, flexCenterOpts, flexOpts } from "../core/style/utils";
import { defaultMenuTitleHeight } from "../main";
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
  const isZh = getConfig().env === Env.zh;

  return (
    <div
      css={{
        height: globalThis.document.documentElement.clientHeight,
        backgroundImage: "url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <div css={[flexBetweenCenterOpts(), { minWidth: 1200, height: defaultMenuTitleHeight, padding: "0px 30px" }]}>
        <img css={{ width: 128 }} src={LogoIcon} alt="openapi-ui" />
        <div css={{ "& > * + *": { marginLeft: 6 } }}>
          <ChangeLangComp />
          <GithubStar />
        </div>
      </div>
      <div css={{ width: 1200, margin: "0px auto", padding: "128px 0px" }}>
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
                  border: `1px solid ${dsc.color.border}`,
                  borderRadius: 6,
                  padding: "0px 6px",
                  cursor: "pointer",
                },
                activeImportModeType === item
                  ? {
                      backgroundColor: dsc.color.primary,
                      color: dsc.color.bg,
                      border: "none",
                    }
                  : {},
              ]}
              onClick={() => {
                setQuery(() => ({
                  activeImportModeType: item,
                }));
              }}
            >
              {displayImportModeTypeIcon(item)}
              <span css={{ marginLeft: 10 }}>{t(displayImportModeType(item))}</span>
            </a>
          ))}
        </div>
        <div css={flexCenterOpts()}>
          <div css={{ width: 600 }}>
            {activeImportModeType === ImportModeType.url && <URLImportView />}
            {activeImportModeType === ImportModeType.file && <FileImportView />}
            {activeImportModeType === ImportModeType.text && <TextImportView />}
          </div>
        </div>
      </div>
      {isZh && <ICPRegistration css={{ position: "absolute", bottom: 0 }} />}
    </div>
  );
}
