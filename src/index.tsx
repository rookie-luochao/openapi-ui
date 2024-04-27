import { Global } from "@emotion/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "regenerator-runtime/runtime.js";
import { AntdConfigProviderWrap } from "./components/antd-config";
import { ModifyAppTitle } from "./components/app-title";
import { InitPackageConfig } from "./components/package-config";
import { CreateAppRouter } from "./core/router/CreateAppRouter";
import { LazyImportComponent } from "./core/router/LazyImportComponent";
import { ThemeWrap } from "./core/style/theme";
import "./i18n";
import { appRoutes } from "./rootRoutes";

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
          <CreateAppRouter routes={appRoutes} isHashRouter={import.meta.env.MODE === "package"} />
        </LazyImportComponent>
      </AntdConfigProviderWrap>
    </ThemeWrap>
  </StrictMode>,
);
