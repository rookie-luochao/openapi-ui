import { Navigate, RouteObject } from "react-router-dom";
import { ErrorBoundaryWrapOutlet } from "./core/error-boundary";
import { loginModuleName, loginRoutes } from "./login/routes";
import { mainLayoutPath, mainRoutes } from "./main/routes";
import { postmanRoutes } from "./postman/routes";

function getAppRoutes() {
  const isPackage = import.meta.env.MODE === "package";

  return [
    {
      path: "/",
      element: <ErrorBoundaryWrapOutlet />,
      children: [
        {
          index: true,
          element: <Navigate to={isPackage ? mainLayoutPath : loginModuleName} />,
        },
        mainRoutes,
        ...(isPackage ? [] : [loginRoutes, postmanRoutes]),
      ],
    },
  ] as RouteObject[];
}

export const appRoutes = getAppRoutes();
