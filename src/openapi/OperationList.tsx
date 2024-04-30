import { Input } from "antd";
import { debounce, filter, groupBy, includes, isEmpty, map, toLower, values } from "lodash-es";
import { ChangeEvent, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Dictionary } from "react-router-toolkit";
import { ITheme, dsc } from "../core/style/defaultStyleConfig";
import { mainLayoutPath } from "../main/routes";
import { IMethodType, IOperationEnhance, IOperationEnhanceMap, MethodType } from "./type";
// import { useOpenapiInfo } from "./useOpenapiInfo";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { useOpenapiWithServiceInfoStore } from "../core/store";
import { ICollapsed } from "../main/Main";
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

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          fontSize: dsc.fontSize.s,
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
        {map(operationList, (operation: IOperationEnhance, key: string) => (
          <div
            key={key}
            onClick={() => {
              nav(`/${mainLayoutPath}/${operation.operationId}${location.search}`);
            }}
            css={[
              {
                height: 46,
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
              toLower(activeOperationId) === toLower(operation.operationId)
                ? {
                    backgroundColor: theme.color.bgGray,
                    color: theme.color.primary,
                  }
                : {},
            ]}
          >
            {!isCollapsed ? (
              <OperationDescStyleWrap deprecated={operation.deprecated}>
                <div
                  style={{
                    fontSize: dsc.fontSize.xs,
                    fontWeight: 600,
                    marginBottom: 4,
                  }}
                >
                  {operation.operationId || ""}
                </div>
                <div style={{ fontSize: dsc.fontSize.xxs }}>
                  {operation.summary || ""}
                  &nbsp;
                </div>
              </OperationDescStyleWrap>
            ) : (
              <div style={{ height: 46 }} />
            )}
            <MethodStyleWrap method={operation.method}>
              {operation.method === MethodType.delete ? operation.method.slice(0, 3) : operation.method}
            </MethodStyleWrap>
          </div>
        ))}
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
                group={group}
                operationList={operationList}
                activeOperationId={operationId}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
