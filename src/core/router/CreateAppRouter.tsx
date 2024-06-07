import { Spin } from "antd";
import { RouteObject, RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";

export function CreateAppRouter({ routes, isHashRouter }: { routes: RouteObject[]; isHashRouter?: boolean }) {
  const router = isHashRouter
    ? createHashRouter(routes)
    : createBrowserRouter(routes, {
        future: {
          // Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase
          v7_normalizeFormMethod: true,
        },
      });

  return <RouterProvider fallbackElement={<Spin spinning />} router={router} />;
}
