import { Navigate, RouteObject } from "react-router-dom";
import { ErrorBoundaryWrapOutlet } from "./core/error-boundary";
import { loginModuleName, loginRoutes } from "./login/routes";
import { mainRoutes } from "./main/routes";
import { postmanRoutes } from "./postman/routes";

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
        postmanRoutes,
      ],
    },
  ] as RouteObject[];
}

export const appRoutes = getAppRoutes();
