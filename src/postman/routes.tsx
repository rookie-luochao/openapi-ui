import { lazy } from "react";

const Postman = lazy(() => import("./Postman"));
export const postmanModuleName = "/postman";

export const postmanRoutes = {
  path: postmanModuleName,
  id: "postman",
  element: <Postman />,
};
