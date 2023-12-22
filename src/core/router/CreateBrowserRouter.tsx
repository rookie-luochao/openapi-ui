import { Spin } from "antd";
import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";

export function CreateBrowserRouter({ routes }: { routes: RouteObject[] }) {
  const router = createBrowserRouter(routes, {
    future: {
      // Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase
      v7_normalizeFormMethod: true,
    },
  });

  return <RouterProvider router={router} fallbackElement={<Spin spinning />} />;
}
