import { lazy } from "react";

const Login = lazy(() => import("./index"));
export const loginModuleName = "/login";

export const loginRoutes = {
  path: loginModuleName,
  id: "login",
  element: <Login />,
};
