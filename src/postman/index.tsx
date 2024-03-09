import { Tabs } from "antd";
import { throttle } from "lodash-es";
import { useEffect, useRef, useState } from "react";
import { PostmanHead } from "../components/head/PostmanHead";
import { ICPRegistration } from "../components/icp-registration";
import { Env } from "../config";
import { getConfig } from "../core/http/config";
import { dsc } from "../core/style/defaultStyleConfig";
import { defaultMenuTitleHeight } from "../main";
import { RequestBuilder } from "./RequestBuilder";

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const initialItems = [
  {
    key: "0",
    label: "request 1",
    children: <RequestBuilder />,
    closable: false,
  },
];

export default function Postman() {
  const [menuHeight, setMenuHeight] = useState(document.documentElement.clientHeight);
  const defaultContentHeight = menuHeight - defaultMenuTitleHeight;
  const isZh = getConfig().env === Env.zh;
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);

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

  const add = () => {
    const newActiveKey = `${++newTabIndex.current}`;
    const newPanes = [...items];
    newPanes.push({
      key: newActiveKey,
      label: `request ${newTabIndex.current + 1}`,
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
    <div>
      <PostmanHead />
      <div
        css={[
          {
            height: defaultContentHeight,
            overflow: "auto",
            padding: 12,
            backgroundColor: dsc.color.bgGray,
            borderRadius: "10px 10px 0",
            boxSizing: "border-box",
          },
          isZh ? { paddingBottom: 0 } : {},
        ]}
      >
        <div
          css={[
            { backgroundColor: dsc.color.bg, padding: 10, borderRadius: 8 },
            isZh ? { minHeight: defaultContentHeight - 32 - 12 } : {},
          ]}
        >
          <div>
            <Tabs
              type="editable-card"
              items={items}
              activeKey={activeKey}
              onChange={(newActiveKey: string) => {
                setActiveKey(newActiveKey);
              }}
              onEdit={onEdit}
            />
          </div>
        </div>
        {isZh && <ICPRegistration />}
      </div>
    </div>
  );
}
