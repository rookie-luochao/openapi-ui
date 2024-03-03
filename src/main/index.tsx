import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import throttle from "lodash-es/throttle";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LogoIcon from "../assets/images/logo.png";
import LogoMiniIcon from "../assets/images/logo_mini.svg";
import { Head } from "../components/head";
import { ICPRegistration } from "../components/icp-registration";
import { Env } from "../config";
import { getConfig } from "../core/http/config";
import { dsc } from "../core/style/defaultStyleConfig";
import { loginModuleName } from "../login/routes";
import { OperationList } from "../openapi/OperationList";

export const defaultMenuTitleHeight = 54;

export interface ICollapsed {
  isCollapsed?: boolean;
}

export const Logo = ({ isCollapsed }: ICollapsed) => {
  const navigate = useNavigate();

  return (
    <a
      className="logo"
      css={{
        height: defaultMenuTitleHeight,
        display: "flex",
        alignItems: "center",
        marginLeft: 24,
      }}
      onClick={() => {
        navigate(loginModuleName);
      }}
    >
      <img
        css={[isCollapsed ? { width: 32 } : { width: 128 }]}
        src={isCollapsed ? LogoMiniIcon : LogoIcon}
        alt="logo"
      />
    </a>
  );
};

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [menuHeight, setMenuHeight] = useState(document.documentElement.clientHeight);
  const defaultContentHeight = menuHeight - defaultMenuTitleHeight;
  const defaultMenuHeight = defaultContentHeight - 48; // 48px为展开收缩图标高度
  const isZh = getConfig().env === Env.zh;

  const throttledResizeHandler = throttle(
    () => {
      setMenuHeight(globalThis.document.documentElement.clientHeight);
    },
    1200,
    { leading: true, trailing: true },
  );

  useEffect(() => {
    globalThis.addEventListener("resize", throttledResizeHandler);

    return () => {
      globalThis.removeEventListener("resize", throttledResizeHandler);
    };
  }, [throttledResizeHandler]);

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
          css={[
            {
              height: defaultContentHeight,
              overflow: "auto",
              padding: 12,
              backgroundColor: dsc.color.bgGray,
              borderRadius: "10px 0 0",
            },
            isZh ? { paddingBottom: 0 } : {},
          ]}
        >
          <div css={isZh ? { minHeight: defaultContentHeight - 32 - 12 } : {}}>
            <Outlet />
          </div>
          {isZh && <ICPRegistration css={{ minWidth: 880 }} />}
        </div>
      </Layout>
    </Layout>
  );
}
