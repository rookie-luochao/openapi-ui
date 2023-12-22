import { Spin } from "antd";
import { ReactNode, Suspense } from "react";

export const LazyImportComponent = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={<Spin spinning />}>{children}</Suspense>;
};
