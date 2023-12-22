import { Navigate, RouteObject } from "react-router-dom";
import { ErrorBoundaryWrapOutlet } from "./core/error-boundary";
import { loginModuleName, loginRoutes } from "./login/routes";
import { mainRoutes } from "./main/routes";

function getAppRoutes() {
  return [
    {
      path: "/",
      element: <ErrorBoundaryWrapOutlet />,
      children: [
        {
          index: true,
          element: <Navigate to={loginModuleName} />,
        },
        loginRoutes,
        mainRoutes,
      ],
    },
  ] as RouteObject[];
}

export const appRoutes = getAppRoutes();
