import { Spin } from "antd";
import { lazy } from "react";
import { Navigate, RouteObject, RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";

import { ErrorBoundaryWrapOutlet } from "./core/error-boundary";
import { loginModulePath, mainLayoutName, postmanModulePath } from "./rootRouteConfig";

const MainLayout = lazy(() => import("./main/Main"));
const OpenapiView = lazy(() => import("./openapi/OpenapiView"));
const Login = lazy(() => import("./login/Login"));
const Postman = lazy(() => import("./postman/Postman"));

const isPackage = import.meta.env.MODE === "package";

const routes: RouteObject[] = [
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
];

const Routes = () => {
  const router = isPackage
    ? createHashRouter(routes)
    : createBrowserRouter(routes, {
        future: {
          // Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase
          v7_normalizeFormMethod: true,
        },
      });

  return <RouterProvider fallbackElement={<Spin spinning />} router={router} />;
};

export default Routes;
