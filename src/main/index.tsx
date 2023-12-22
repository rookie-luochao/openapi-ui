import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { fromEvent, throttleTime } from "rxjs";
import LogoIcon from "../assets/images/logo.png";
import LogoMiniIcon from "../assets/images/logo_mini.svg";
import { Head } from "../components/head";
import { dsc } from "../core/style/defaultStyleConfig";
import { OperationList } from "../openapi/OperationList";

export const defaultMenuTitleHeight = 64;

export interface ICollapsed {
  isCollapsed?: boolean;
}

const Logo = ({ isCollapsed }: ICollapsed) => {
  return (
    <div
      className="logo"
      css={{
        height: defaultMenuTitleHeight,
        display: "flex",
        alignItems: "center",
        marginLeft: 24,
      }}
    >
      <img
        css={[isCollapsed ? { width: 32 } : { width: 128 }]}
        src={isCollapsed ? LogoMiniIcon : LogoIcon}
        alt="logo"
      />
    </div>
  );
};

export function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [menuHeight, setMenuHeight] = useState(document.documentElement.clientHeight);
  const defaultContentHeight = menuHeight - defaultMenuTitleHeight;
  const defaultMenuHeight = defaultContentHeight - 48; // 48px为展开收缩图表高度

  useEffect(() => {
    const subscription = fromEvent(window, "resize")
      .pipe(throttleTime(1000))
      .subscribe(() => {
        const timeoutId = globalThis.setTimeout(() => {
          setMenuHeight(document.documentElement.clientHeight);
        }, 100);
        return () => {
          globalThis.clearTimeout(timeoutId);
        };
      });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <Layout>
      <Sider theme={"light"} width={320} collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <Logo isCollapsed={collapsed} />
        <div css={{ height: defaultMenuHeight, overflow: "auto" }}>
          <OperationList isCollapsed={collapsed} />
        </div>
      </Sider>
      <Layout className="site-layout" css={{ backgroundColor: dsc.color.bg }}>
        <Head />
        <div
          css={{
            height: defaultContentHeight,
            overflow: "auto",
            padding: 12,
            backgroundColor: dsc.color.bgGray,
            borderRadius: "10px 0 0",
          }}
        >
          <Outlet />
        </div>
      </Layout>
    </Layout>
  );
}
