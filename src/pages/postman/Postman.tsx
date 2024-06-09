import { useTheme } from "@emotion/react";
import { Tabs } from "antd";
import { throttle } from "lodash-es";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { PostmanHead } from "@/components/head/PostmanHead";
import { defaultHeadTitleHeight } from "@/components/head/common";
import { ICPRegistration } from "@/components/icp-registration";
import { Env } from "@/config";
import { getConfig } from "@/core/http/config";
import { useConfigInfoStore } from "@/core/store";
import { ITheme, darkTheme, lightTheme } from "@/core/style/defaultStyleConfig";
import i18n from "@/i18n";

import { RequestBuilder } from "./components/RequestBuilder";

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const initialItems = [
  {
    key: "0",
    label: `${i18n.t("postman.request")} 1`,
    children: <RequestBuilder />,
    closable: false,
  },
];

export default function Postman() {
  const { t } = useTranslation();
  const theme = useTheme() as ITheme;
  const { configInfo } = useConfigInfoStore();
  const isDarkTheme = configInfo?.theme === "dark";
  const [contentHeight, setContentHeight] = useState(document.documentElement.clientHeight);
  const defaultContentHeight = contentHeight - defaultHeadTitleHeight;
  const isZh = getConfig().env === Env.zh;
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);

  const throttledResizeHandler = throttle(
    () => {
      setContentHeight(globalThis.document.documentElement.clientHeight);
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

  const add = () => {
    const newActiveKey = `${++newTabIndex.current}`;
    const newPanes = [...items];
    newPanes.push({
      key: newActiveKey,
      label: `${t("postman.request")} ${newTabIndex.current + 1}`,
      children: <RequestBuilder />,
      closable: true,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: TargetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;

    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);

    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }

    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (targetKey: TargetKey, action: "add" | "remove") => {
    if (action === "add") {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
    <div style={{ backgroundColor: theme.color.bg }}>
      <PostmanHead />
      <div
        css={[
          {
            height: defaultContentHeight,
            overflow: "auto",
            padding: 12,
            backgroundColor: theme.color.bgGray,
            borderRadius: "10px 10px 0",
            boxSizing: "border-box",
          },
          isZh ? { paddingBottom: 0 } : {},
        ]}
      >
        <div
          css={[
            {
              backgroundColor: isDarkTheme ? darkTheme.color.bgGray : lightTheme.color.bg,
              padding: 10,
              borderRadius: 8,
            },
            isZh ? { minHeight: defaultContentHeight - 32 - 12 } : {},
          ]}
        >
          <Tabs
            activeKey={activeKey}
            items={items}
            type="editable-card"
            onEdit={onEdit}
            onChange={(newActiveKey: string) => {
              setActiveKey(newActiveKey);
            }}
          />
        </div>
        {isZh && <ICPRegistration />}
      </div>
    </div>
  );
}
