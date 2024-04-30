import { defaultTimeout } from "@request";
import { Button, Form, Input, InputNumber, Modal, Tooltip, message } from "antd";
import { useTranslation } from "react-i18next";
import { IConfigInfo, useConfigInfoStore } from "../../core/store";
import { postmanModuleName } from "../../postman/routes";
import { PostmanIcon } from "../icon";

export function IconDown() {
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
          <InputNumber style={{ width: "100%" }} min={1} max={3600} placeholder={t("head.requestTimeoutPlaceholder")} />
        </FormItem>
        <FormItem name="authorization" label={t("head.authorizationLabel")}>
          <Input style={{ width: "100%" }} placeholder={t("head.authorizationPlaceholder")} />
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

export function GoToPostman() {
  const { t } = useTranslation();

  return (
    <Tooltip title={t("postman.goToPostman")}>
      <a
        css={{ cursor: "pointer", opacity: 0.8, "&:hover": { opacity: 1 } }}
        onClick={() => {
          globalThis.open(`${globalThis.location.origin}${postmanModuleName}`);
        }}
      >
        <PostmanIcon />
      </a>
    </Tooltip>
  );
}
