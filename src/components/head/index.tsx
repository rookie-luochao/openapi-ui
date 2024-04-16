import { request } from "@request";
import { Dropdown, Input, message } from "antd";
import { SearchProps } from "antd/es/input";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { PartialParsedUrlQuery, toQueryString, useRouterQuery } from "react-router-toolkit";
import { useOpenapiWithServiceInfoStore } from "../../core/store";
import { dsc } from "../../core/style/defaultStyleConfig";
import { flexCenterOpts } from "../../core/style/utils";
import { IImportModeType, ImportModeType } from "../../login/config";
import { loginModuleName } from "../../login/routes";
import { parseSwaggerOrOpenapi } from "../../login/util";
import { defaultMenuTitleHeight } from "../../main";
import { mainLayoutPath } from "../../main/routes";
import { IPaths } from "../../openapi/type";
import { flattenOperations } from "../../openapi/useOpenapiInfo";
import { ChangeLangComp } from "../change-lang";
import GithubStar from "../github-star";
import { GoToPostman, IconDown, UpdateConfigInfoModalComp } from "./common";

function UserName({ onChange }: { onChange: (value: string) => void }) {
  const { openapiWithServiceInfo } = useOpenapiWithServiceInfoStore();
  const { t } = useTranslation();

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
          size="small"
          placeholder={t("head.inputUrl")}
          style={{ minWidth: 476 }}
          defaultValue={openapiWithServiceInfo?.serviceURL}
          onSearch={onSearch}
        />
      ) : (
        <div css={{ color: dsc.color.text, opacity: 0.6, fontWeight: 500, fontSize: dsc.fontSize.xs }}>
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
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { updateOpenapiWithServiceInfo } = useOpenapiWithServiceInfoStore();
  const [query, setQuery] = useRouterQuery<IQuery>();
  const { serviceURL, importModeType, logon } = query;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isFlagRef = useRef(true);

  useEffect(() => {
    if (!isFlagRef.current) return;

    if (importModeType === ImportModeType.url && serviceURL && !logon) {
      refetchOpenapiInfo(serviceURL);
    } else {
      setQuery((preState) => ({
        ...preState,
        logon: "",
      }));
    }

    isFlagRef.current = false;
  }, []);

  async function refetchOpenapiInfo(url: string, isCallBySearchInput?: boolean) {
    const res = await request(Object.assign({ url: url }));

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
          `/${mainLayoutPath}${toQueryString({
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
            height: defaultMenuTitleHeight,
            backgroundColor: dsc.color.bg,
            padding: 12,
          },
        ]}
      >
        <div css={[flexCenterOpts(), { "& > * + *": { marginLeft: 6 } }]}>
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
                    navigate(loginModuleName);
                  },
                },
              ],
            }}
          >
            <a css={flexCenterOpts()} onClick={(e) => e.preventDefault()}>
              <IconDown />
            </a>
          </Dropdown>
          <ChangeLangComp />
          {import.meta.env.MODE !== "package" && <GoToPostman />}
          <GithubStar />
        </div>
      </div>
    </>
  );
}
