import { defaultTimeout } from "@request";
import { Button, Form, Input, InputNumber, Modal, Tooltip, message } from "antd";
import { useTranslation } from "react-i18next";

import { IConfigInfo, useConfigInfoStore } from "../../core/store";
import { postmanModulePath } from "../../rootRouteConfig";
import { PostmanIcon } from "../icon";

export function IconDown() {
  return (
    <svg fill="none" height="18" version="1.1" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          height="18"
          id="master_svg0_182_24814"
          width="18"
          x="0"
          y="0"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_foregroundBlur" />
          <feBlend in="SourceGraphic" in2="effect1_foregroundBlur" mode="normal" result="shape" />
        </filter>
      </defs>
      <g>
        <g filter="url(#master_svg0_182_24814)">
          <rect fill="#EEF2F9" fillOpacity="0.8500000238418579" height="18" rx="4" width="18" x="0" y="0" />
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

export function UpdateConfigInfoModalComp({ onSuccess }: { onSuccess: () => void }) {
  const [form] = Form.useForm<IConfigInfo>();
  const { configInfo, updateConfigInfo } = useConfigInfoStore();
  const { t } = useTranslation();

  function onFinish(values: IConfigInfo) {
    updateConfigInfo(values);
    message.success(t("head.updateConfigSuccess"));
    onSuccess();
  }

  return (
    <Modal footer={null} open={true} title={t("head.updateConfig")} onCancel={onSuccess}>
      <Form
        form={form}
        initialValues={{ timeout: configInfo?.timeout || defaultTimeout, authorization: configInfo?.authorization }}
        layout="vertical"
        name="config"
        onFinish={onFinish}
      >
        <FormItem
          label={t("head.requestTimeoutLabel")}
          name="timeout"
          rules={[{ required: true, message: t("head.requestTimeoutPlaceholder") }]}
        >
          <InputNumber max={3600} min={1} placeholder={t("head.requestTimeoutPlaceholder")} style={{ width: "100%" }} />
        </FormItem>
        <FormItem label={t("head.authorizationLabel")} name="authorization">
          <Input placeholder={t("head.authorizationPlaceholder")} style={{ width: "100%" }} />
        </FormItem>
        <FormItem>
          <Button htmlType="submit" style={{ width: "100%" }} type="primary">
            {t("head.submit")}
          </Button>
        </FormItem>
      </Form>
    </Modal>
  );
}

export function GoToPostman() {
  const { t } = useTranslation();

  return (
    <Tooltip title={t("postman.goToPostman")}>
      <a
        css={{ cursor: "pointer", opacity: 0.8, "&:hover": { opacity: 1 } }}
        onClick={() => {
          globalThis.open(`${globalThis.location.origin}${postmanModulePath}`);
        }}
      >
        <PostmanIcon />
      </a>
    </Tooltip>
  );
}

export const defaultHeadTitleHeight = 54;
