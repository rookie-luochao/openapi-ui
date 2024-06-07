import { useTheme } from "@emotion/react";
import { Input } from "antd";
import { debounce, filter, groupBy, includes, isEmpty, map, toLower, values } from "lodash-es";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Dictionary } from "react-router-toolkit";

import { useOpenapiWithServiceInfoStore } from "../core/store";
import { ITheme, dsc } from "../core/style/defaultStyleConfig";
import { ICollapsed } from "../main/Main";
import { mainLayoutName } from "../rootRouteConfig";
import { IMethodType, IOperationEnhance, IOperationEnhanceMap, MethodType } from "./type";
// import { useOpenapiInfo } from "./useOpenapiInfo";
import { getMethodColor } from "./util";

function MethodStyleWrap({ method, children }: { method: IMethodType; children: React.ReactNode }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        fontSize: dsc.fontSize.l,
        fontFamily: dsc.fontFamily.mono,
        color: getMethodColor(method),
        opacity: 0.8,
        textTransform: "uppercase",
        padding: 8,
      }}
    >
      {children}
    </div>
  );
}

function OperationDescStyleWrap({ deprecated, children }: { deprecated?: boolean; children: React.ReactNode }) {
  return (
    <div
      css={{
        padding: "0 8px",
        textDecoration: deprecated ? "line-through" : "none",
        "& > *": {
          width: 240,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        },
      }}
    >
      {children}
    </div>
  );
}

function GroupedOperationList({
  group,
  operationList,
  activeOperationId,
  isCollapsed,
}: {
  group: string;
  operationList: IOperationEnhance[];
  activeOperationId?: string;
} & ICollapsed) {
  const nav = useNavigate();
  const location = useLocation();
  const theme = useTheme() as ITheme;
  const operationHeight = 54;

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          color: theme.color.menuGroup,
          backgroundColor: theme.color.menuGroupBg,
          padding: "0.5em 0.8em",
          borderBottom: `1px solid ${theme.color.border}`,
          borderRadius: 4,
          fontWeight: 400,
        }}
      >
        {group}
      </div>
      <div>
        {map(operationList, (operation: IOperationEnhance, index) => {
          const lastOperationId = decodeURIComponent(operation.operationId);

          return (
            <div
              key={lastOperationId || index}
              id={lastOperationId}
              css={[
                {
                  height: operationHeight,
                  borderBottom: `1px solid ${theme.color.border}`,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  padding: "0.8em 0.4em",
                  textDecoration: "none",
                  color: theme.color.menuItem,
                  backgroundColor: theme.color.bg,
                  borderRadius: 4,
                  cursor: "pointer",
                  ":hover": {
                    backgroundColor: theme.color.bgGray,
                  },
                },
                activeOperationId === lastOperationId
                  ? {
                      backgroundColor: theme.color.bgGray,
                      color: theme.color.primary,
                    }
                  : {},
              ]}
              onClick={() => {
                nav(`/${mainLayoutName}/${operation.operationId}${location.search}`);
              }}
            >
              {!isCollapsed ? (
                <OperationDescStyleWrap deprecated={operation.deprecated}>
                  <div
                    style={{
                      fontWeight: 600,
                      marginBottom: 4,
                    }}
                  >
                    {operation.operationName}
                  </div>
                  <div style={{ fontSize: dsc.fontSize.xs }}>
                    {operation.summary || ""}
                    &nbsp;
                  </div>
                </OperationDescStyleWrap>
              ) : (
                <div style={{ height: operationHeight }} />
              )}
              <MethodStyleWrap method={operation.method}>
                {operation.method === MethodType.delete ? operation.method.slice(0, 3) : operation.method}
              </MethodStyleWrap>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function OperationList(props: ICollapsed) {
  const { operationId } = useParams();
  const { t } = useTranslation();
  // const openapiWithServiceInfo = useOpenapiInfo();
  const { openapiWithServiceInfo } = useOpenapiWithServiceInfoStore();
  const operations = openapiWithServiceInfo?.operations || ({} as IOperationEnhanceMap);
  const [filterValue, setFilterValue] = useState("");
  const [groupedOperations, setGroupedOperations] = useState({} as Dictionary<IOperationEnhance[]>);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isEmpty(operations)) {
      const operationList = filterValue
        ? filter(operations, (operation) => {
            const lowerFilterValue = toLower(filterValue);
            return (
              includes(toLower(operation.operationId), lowerFilterValue) ||
              includes(toLower(operation.group), lowerFilterValue) ||
              includes(toLower(operation.path), lowerFilterValue) ||
              includes(toLower(operation.summary), filterValue)
            );
          })
        : values(operations);

      // groupBy group field
      const groupedOperations = groupBy(operationList, (operation: IOperationEnhance) => operation.group);

      setGroupedOperations(groupedOperations);
    }
  }, [operations, filterValue]);

  useEffect(() => {
    if (operationId) {
      scrollIntoAnchorElement();
    }
    return () => {
      timerRef.current && clearTimeout(timerRef.current);
    };
  }, []);

  function scrollIntoAnchorElement() {
    const anchorElement = document.getElementById(`${operationId}`);

    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: "smooth" });

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    } else {
      timerRef.current = setTimeout(scrollIntoAnchorElement, 100);
    }
  }

  return (
    <div style={{ position: "relative" }}>
      <div style={{ fontSize: dsc.fontSize.xs, padding: "0.5em 0.8em" }}>
        <Input
          allowClear
          placeholder={t("openapi.searchPlaceholder")}
          onChange={debounce((e: ChangeEvent<HTMLInputElement>) => {
            setFilterValue(e.target.value);
          }, 250)}
        />
      </div>
      <div>
        {!isEmpty(groupedOperations) && (
          <>
            {map(groupedOperations, (operationList: IOperationEnhance[], group: string) => (
              <GroupedOperationList
                {...props}
                key={group}
                activeOperationId={operationId}
                group={group}
                operationList={operationList}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
