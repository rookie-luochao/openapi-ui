import { lazy } from "react";

const MainLayout = lazy(() => import("./index"));
const OpenapiView = lazy(() => import("../openapi/OpenapiView"));
export const mainLayoutPath = "service";

export const mainRoutes = {
  path: `${mainLayoutPath}`,
  element: <MainLayout />,
  children: [
    {
      path: `:operationId`,
      element: <OpenapiView />,
    },
  ],
};
