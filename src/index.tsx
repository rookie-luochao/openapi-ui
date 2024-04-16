import { Global } from "@emotion/react";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "regenerator-runtime/runtime.js";
import { ModifyAppTitle } from "./components/app-title";
import { InitPackageConfig } from "./components/package-config";
import { CreateAppRouter } from "./core/router/CreateAppRouter";
import { LazyImportComponent } from "./core/router/LazyImportComponent";
import { dsc } from "./core/style/defaultStyleConfig";
import "./i18n";
import { appRoutes } from "./rootRoutes";

ReactDOM.createRoot(
  document.getElementById(import.meta.env.MODE === "package" ? "openapi-ui-container" : "root") as HTMLElement,
).render(
  <StrictMode>
    <InitPackageConfig />
    <Global
      styles={{
        body: {
          margin: 0,
          padding: 0,
        },
      }}
    />
    <ModifyAppTitle />
    <ConfigProvider
      locale={zhCN}
      theme={{
        components: {
          Select: { fontSize: dsc.fontSize.xs },
          Input: { fontSize: dsc.fontSize.xs },
          InputNumber: { fontSize: dsc.fontSize.xs },
          Upload: { fontSize: dsc.fontSize.xs },
          Dropdown: { fontSize: dsc.fontSize.xs },
          Form: { fontSize: dsc.fontSize.xs },
          DatePicker: { fontSize: dsc.fontSize.xs },
        },
      }}
    >
      <LazyImportComponent>
        <CreateAppRouter routes={appRoutes} isHashRouter={import.meta.env.MODE === "package"} />
      </LazyImportComponent>
    </ConfigProvider>
  </StrictMode>,
);
