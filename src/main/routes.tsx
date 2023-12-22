import { OpenapiView } from "../openapi/OpenapiView";
import { MainLayout } from "./index";

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
