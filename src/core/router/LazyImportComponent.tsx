import { Spin } from "antd";
import { ReactNode, Suspense } from "react";

export const LazyImportComponent = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<Spin spinning style={{ position: "fixed", top: "50%", left: "50%" }} />}>{children}</Suspense>
  );
};
