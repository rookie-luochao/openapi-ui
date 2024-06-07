import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

import { ErrorBoundaryWrapOutlet } from "./core/error-boundary";
import { loginModulePath, mainLayoutName, postmanModulePath } from "./rootRouteConfig";

const MainLayout = lazy(() => import("./main/Main"));
const OpenapiView = lazy(() => import("./openapi/OpenapiView"));
const Login = lazy(() => import("./login/Login"));
const Postman = lazy(() => import("./postman/Postman"));

function getAppRoutes() {
  const isPackage = import.meta.env.MODE === "package";

  return [
    {
      path: "/",
      element: <ErrorBoundaryWrapOutlet />,
      children: [
        {
          index: true,
          element: <Navigate to={isPackage ? mainLayoutName : loginModulePath} />,
        },
        {
          path: mainLayoutName,
          element: <MainLayout />,
          children: [
            {
              path: `:operationId`,
              element: <OpenapiView />,
            },
          ],
        },
        ...(isPackage
          ? []
          : [
              {
                path: loginModulePath,
                id: "login",
                element: <Login />,
              },
              {
                path: postmanModulePath,
                id: "postman",
                element: <Postman />,
              },
            ]),
      ],
    },
  ] as RouteObject[];
}

const appRoutes = getAppRoutes();

export default appRoutes;
