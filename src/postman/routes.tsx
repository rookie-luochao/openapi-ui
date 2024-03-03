import { lazy } from "react";

const Postman = lazy(() => import("./index"));
export const postmanModuleName = "/postman";

export const postmanRoutes = {
  path: postmanModuleName,
  id: "postman",
  element: <Postman />,
};
