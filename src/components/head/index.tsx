import { Button, Dropdown, Form, Input, InputNumber, Modal, message } from "antd";
import copy from "copy-to-clipboard";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { PartialParsedUrlQuery, toQueryString, useRouterQuery } from "react-router-toolkit";
import langIcon from "../../assets/images/lang.svg";
import { defaultTimeout, request } from "../../core/http";
import {
  IConfigInfo,
  IOpenapiWithServiceInfo,
  useConfigInfoStore,
  useOpenapiWithServiceInfoStore,
} from "../../core/store";
import { dsc } from "../../core/style/defaultStyleConfig";
import { flexCenterOpts } from "../../core/style/utils";
import { LangType } from "../../i18n/config";
import { ImportModeType } from "../../login/config";
import { loginModuleName } from "../../login/routes";
import { parseSwaggerOrOpenapi } from "../../login/util";
import { defaultMenuTitleHeight } from "../../main";
import { IPaths } from "../../openapi/type";
import { flattenOperations } from "../../openapi/useOpenapiInfo";
import GithubStar from "../github-star";

function UserName() {
  const { openapiWithServiceInfo } = useOpenapiWithServiceInfoStore();
  const service = `${openapiWithServiceInfo?.serviceURL || ""}${
    openapiWithServiceInfo?.servicePath ? `/${openapiWithServiceInfo?.servicePath}` : ""
  }`;

  return <div css={{ color: dsc.color.text, opacity: 0.6, fontWeight: 500, fontSize: dsc.fontSize.xs }}>{service}</div>;
}

function IconDown() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" version="1.1" width="18" height="18" viewBox="0 0 18 18">
      <defs>
        <filter
          id="master_svg0_182_24814"
          filterUnits="objectBoundingBox"
          colorInterpolationFilters="sRGB"
          x="0"
          y="0"
          width="18"
          height="18"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_foregroundBlur" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_foregroundBlur" result="shape" />
        </filter>
      </defs>
      <g>
        <g filter="url(#master_svg0_182_24814)">
          <rect x="0" y="0" width="18" height="18" rx="4" fill="#EEF2F9" fillOpacity="0.8500000238418579" />
        </g>
        <g transform="matrix(-1,0,0,-1,26,24)">
          <path
            d="M13.649878,16.187649999999998C13.387973,16.51503,13.621059,17,14.04031,17L19.959690000000002,17C20.37894,17,20.61203,16.51503,20.35012,16.187649999999998L17.390430000000002,12.488043C17.190269999999998,12.23784,16.809730000000002,12.23784,16.60957,12.488043L13.649878,16.187649999999998Z"
            fill="#8B8EA2"
            fillOpacity="1"
          />
        </g>
      </g>
    </svg>
  );
}

const FormItem = Form.Item<IConfigInfo>;

function UpdateConfigInfoModalComp({ onSuccess }: { onSuccess: () => void }) {
  const [form] = Form.useForm<IConfigInfo>();
  const { configInfo, updateConfigInfo } = useConfigInfoStore();
  const { t } = useTranslation();

  function onFinish(values: IConfigInfo) {
    updateConfigInfo(values);
    message.success(t("head.updateConfigSuccess"));
    onSuccess();
  }

  return (
    <Modal title={t("head.updateConfig")} open={true} footer={null} onCancel={onSuccess}>
      <Form
        name="config"
        form={form}
        layout="vertical"
        initialValues={{ timeout: configInfo?.timeout || defaultTimeout, authorization: configInfo?.authorization }}
        onFinish={onFinish}
      >
        <FormItem
          name="timeout"
          label={t("head.requestTimeoutLabel")}
          rules={[{ required: true, message: t("head.requestTimeoutPlaceholder") }]}
        >
          <InputNumber css={{ width: "100%" }} min={1} max={3600} placeholder={t("head.requestTimeoutPlaceholder")} />
        </FormItem>
        <FormItem name="authorization" label={t("head.authorizationLabel")}>
          <Input css={{ width: "100%" }} placeholder={t("head.authorizationPlaceholder")} />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            {t("head.submit")}
          </Button>
        </FormItem>
      </Form>
    </Modal>
  );
}

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

interface IQuery extends PartialParsedUrlQuery {
  share?: string; // "yes"
  serviceURL?: string;
  servicePath?: string;
  logon?: string; // "yes"
}

export function Head() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { openapiWithServiceInfo, updateOpenapiWithServiceInfo } = useOpenapiWithServiceInfoStore();
  const { importModeType, serviceURL, servicePath } = openapiWithServiceInfo || ({} as IOpenapiWithServiceInfo);
  const { configInfo } = useConfigInfoStore();
  const [{ share, serviceURL: shareServiceURL = "", servicePath: shareServicePath, logon }, setQuery] =
    useRouterQuery<IQuery>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isShare = share === "yes";

  useEffect(() => {
    if (share === "yes" && shareServiceURL) {
      fetchOpenapiInfoByShareURL(`${shareServiceURL}/${shareServicePath}`);
    } else if (importModeType === ImportModeType.url && serviceURL && !logon) {
      fetchOpenapiInfoByShareURL(`${serviceURL}/${servicePath}`);
    } else {
      setQuery(() => ({}));
    }
  }, []);

  async function fetchOpenapiInfoByShareURL(url: string) {
    const res = await request(Object.assign({ url: url }, configInfo?.timeout ? { timeout: configInfo?.timeout } : {}));

    if (res.status >= 200 && res.status < 300) {
      const openapi = await parseSwaggerOrOpenapi(res.data);
      const openapiInfo = {
        serviceURL: isShare ? shareServiceURL : serviceURL,
        servicePath: isShare ? shareServicePath : servicePath,
        openapi: openapi,
        operations: flattenOperations((openapi.paths || {}) as IPaths),
        importModeType: ImportModeType.url,
      };
      updateOpenapiWithServiceInfo(openapiInfo);

      if (isShare) {
        setQuery(() => ({}));
      }
    }
  }

  return (
    <>
      {isModalOpen && <UpdateConfigInfoModalComp onSuccess={() => setIsModalOpen(false)} />}
      <div
        css={[
          flexCenterOpts({ justifyContent: "flex-end " }),
          {
            height: defaultMenuTitleHeight,
            backgroundColor: dsc.color.bg,
            padding: 12,
          },
        ]}
      >
        <div css={[flexCenterOpts(), { "& > * + *": { marginLeft: 6 } }]}>
          <UserName />
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
                  label: t("head.shareUrl"),
                  disabled: openapiWithServiceInfo?.importModeType !== ImportModeType.url,
                  onClick() {
                    if (openapiWithServiceInfo?.serviceURL) {
                      const url = `${globalThis.location.href}${toQueryString({
                        share: "yes",
                        serviceURL: openapiWithServiceInfo?.serviceURL,
                        servicePath: openapiWithServiceInfo?.servicePath || "",
                      })}`;
                      copy(url);
                      message.success(t("head.shareUrlSuccess"));
                    }
                  },
                },
                {
                  key: "2",
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
          <GithubStar />
        </div>
      </div>
    </>
  );
}
