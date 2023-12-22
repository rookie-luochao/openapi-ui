import { Global } from "@emotion/react";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { CreateBrowserRouter } from "./core/router/CreateBrowserRouter";
import { LazyImportComponent } from "./core/router/LazyImportComponent";
import { dsc } from "./core/style/defaultStyleConfig";
import { appRoutes } from "./rootRoutes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Global
      styles={{
        body: {
          margin: 0,
          padding: 0,
        },
      }}
    />
    <ConfigProvider
      locale={zhCN}
      theme={{
        components: {
          Select: { fontSize: dsc.fontSize.xs },
          Input: { fontSize: dsc.fontSize.xs },
          Upload: { fontSize: dsc.fontSize.xs },
          Dropdown: { fontSize: dsc.fontSize.xs },
        },
      }}
    >
      <LazyImportComponent>
        <CreateBrowserRouter routes={appRoutes} />
      </LazyImportComponent>
    </ConfigProvider>
  </StrictMode>,
);
