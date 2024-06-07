import { useTheme } from "@emotion/react";
import { request } from "@request";
import { Dropdown, Input, message } from "antd";
import { SearchProps } from "antd/es/input";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { PartialParsedUrlQuery, parseQueryString, toQueryString } from "react-router-toolkit";

import { useOpenapiWithServiceInfoStore } from "../../core/store";
import SwitchTheme from "../../core/style/ThemeSwitch";
import { ITheme, dsc } from "../../core/style/defaultStyleConfig";
import { flexCenterOpts } from "../../core/style/utils";
import { IImportModeType, ImportModeType } from "../../login/config";
import { parseSwaggerOrOpenapi } from "../../login/util";
import { defaultHeadTitleHeight } from "../../main/Main";
import { IPaths } from "../../openapi/type";
import { flattenOperations } from "../../openapi/useOpenapiInfo";
import { loginModulePath, mainLayoutName } from "../../rootRouteConfig";
import { ChangeLangComp } from "../change-lang";
import GithubStar from "../github-star";
import { GoToPostman, IconDown, UpdateConfigInfoModalComp } from "./common";

function UserName({ onChange }: { onChange: (value: string) => void }) {
  const { openapiWithServiceInfo } = useOpenapiWithServiceInfoStore();
  const { t } = useTranslation();
  const theme = useTheme() as ITheme;

  const onSearch: SearchProps["onSearch"] = (value) => {
    if (!value?.trim()) {
      return message.warning(t("head.inputUrl"));
    }
    onChange(value);
  };

  return (
    <>
      {openapiWithServiceInfo?.importModeType === "url" ? (
        <Input.Search
          allowClear
          enterButton
          defaultValue={openapiWithServiceInfo?.serviceURL}
          placeholder={t("head.inputUrl")}
          size="small"
          style={{ minWidth: 476 }}
          onSearch={onSearch}
        />
      ) : (
        <div style={{ color: theme.color.textLight, fontWeight: 500, fontSize: dsc.fontSize.xs }}>
          {openapiWithServiceInfo?.serviceURL}
        </div>
      )}
    </>
  );
}

interface IQuery extends PartialParsedUrlQuery {
  serviceURL?: string;
  importModeType?: IImportModeType;
  logon?: string; // "yes"
}

export function Head() {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { updateOpenapiWithServiceInfo } = useOpenapiWithServiceInfoStore();
  const theme = useTheme() as ITheme;
  const query = parseQueryString(search) as IQuery;
  const { serviceURL, importModeType, logon } = query;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isFlagRef = useRef(true);

  useEffect(() => {
    if (!isFlagRef.current) return;

    if (importModeType === ImportModeType.url && serviceURL && !logon) {
      refetchOpenapiInfo(serviceURL);
    } else {
      navigate(
        `${pathname}${toQueryString({
          ...(query || {}),
          logon: "",
        })}`,
        {
          replace: true,
        },
      );
    }

    isFlagRef.current = false;
  }, [importModeType, logon, navigate, pathname, query, refetchOpenapiInfo, serviceURL]);

  async function refetchOpenapiInfo(url: string, isCallBySearchInput?: boolean) {
    const res = await request({ url: url });

    if (res?.status >= 200 && res?.status < 300) {
      const openapi = await parseSwaggerOrOpenapi(res.data);
      const openapiInfo = {
        serviceURL: url,
        importModeType: ImportModeType.url,
        openapi: openapi,
        operations: flattenOperations((openapi.paths || {}) as IPaths),
      };
      updateOpenapiWithServiceInfo(openapiInfo);

      if (isCallBySearchInput) {
        navigate(
          `/${mainLayoutName}${toQueryString({
            ...query,
            serviceURL: url,
          })}`,
          {
            replace: true,
          },
        );
      }
    }
  }

  return (
    <>
      {isModalOpen && <UpdateConfigInfoModalComp onSuccess={() => setIsModalOpen(false)} />}
      <div
        css={[
          flexCenterOpts({ justifyContent: "flex-end" }),
          {
            height: defaultHeadTitleHeight,
            backgroundColor: theme.color.bg,
            padding: 12,
          },
        ]}
      >
        <div css={[{ display: "flex" }, { "& > *": { marginLeft: 4, ...flexCenterOpts() } }]}>
          <UserName onChange={(value) => refetchOpenapiInfo(value, true)} />
          <Dropdown
            menu={{
              items: [
                {
                  key: "0",
                  label: t("head.updateConfig"),
                  onClick() {
                    setIsModalOpen(true);
                  },
                },
                {
                  key: "1",
                  label: t("head.reselectService"),
                  onClick() {
                    navigate(loginModulePath);
                  },
                },
              ],
            }}
          >
            <a style={{ cursor: "pointer" }} onClick={(e) => e.preventDefault()}>
              <IconDown />
            </a>
          </Dropdown>
          <SwitchTheme />
          <ChangeLangComp />
          {import.meta.env.MODE !== "package" && <GoToPostman />}
          <GithubStar />
        </div>
      </div>
    </>
  );
}
