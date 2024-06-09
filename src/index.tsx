import { Global } from "@emotion/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "regenerator-runtime/runtime.js";

import { AntdConfigProviderWrap } from "./components/antd-config";
import { ModifyAppTitle } from "./components/app-title";
import { InitPackageConfig } from "./components/package-config";
import { LazyImportComponent } from "./core/router/LazyImportComponent";
import ThemeWrap from "./core/style/ThemeWrap";
import "./i18n";
import Router from "./router";

ReactDOM.createRoot(
  document.getElementById(import.meta.env.MODE === "package" ? "openapi-ui-container" : "root") as HTMLElement,
).render(
  <StrictMode>
    <InitPackageConfig />
    <ModifyAppTitle />
    <Global
      styles={{
        body: {
          margin: 0,
          padding: 0,
        },
      }}
    />
    <ThemeWrap>
      <AntdConfigProviderWrap>
        <LazyImportComponent>
          <Router />
        </LazyImportComponent>
      </AntdConfigProviderWrap>
    </ThemeWrap>
  </StrictMode>,
);
