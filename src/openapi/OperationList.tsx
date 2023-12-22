import { useDebounceEffect } from "ahooks";
import { Input } from "antd";
import { filter, groupBy, includes, isEmpty, map, toLower } from "lodash-es";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Dictionary } from "react-router-toolkit";
import { dsc } from "../core/style/defaultStyleConfig";
import { mainLayoutPath } from "../main/routes";
import { IMethodType, IOperationEnhance, IOperationEnhanceMap, MethodType } from "./type";
// import { useOpenapiInfo } from "./useOpenapiInfo";
import { useOpenapiWithServiceInfoStore } from "../core/store";
import { ICollapsed } from "../main";
import { getMethodColor } from "./util";

function MethodStyleWrap({ method, children }: { method: IMethodType; children: React.ReactNode }) {
  return (
    <div
      css={{
        position: "absolute",
        top: 0,
        right: 0,
        fontSize: dsc.fontSize.l,
        fontFamily: dsc.fontFamily.mono,
        color: getMethodColor(method),
        opacity: 0.6,
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

  return (
    <div css={{ position: "relative" }}>
      <div
        css={{
          fontSize: dsc.fontSize.xs,
          color: dsc.color.bg,
          backgroundColor: dsc.color.primary,
          opacity: 0.6,
          padding: "0.5em 0.8em",
          borderBottom: `1px solid ${dsc.color.border}`,
          borderRadius: 4,
        }}
      >
        {group}
      </div>
      <div>
        {map(operationList, (operation: IOperationEnhance, key: string) => (
          <a
            key={key}
            onClick={() => {
              nav(`/${mainLayoutPath}/${operation.operationId}`);
            }}
            css={[
              {
                borderBottom: `1px solid ${dsc.color.border}`,
                position: "relative",
                fontSize: dsc.fontSize.xxs,
                display: "flex",
                alignItems: "center",
                padding: "0.8em 0.4em",
                textDecoration: "none",
                color: dsc.color.text,
                borderRadius: 4,
                ":hover": {
                  backgroundColor: dsc.color.bgGray,
                  cursor: "pointer",
                },
              },
              toLower(activeOperationId) === toLower(operation.operationId)
                ? {
                    backgroundColor: dsc.color.bgGray,
                  }
                : {},
            ]}
          >
            <MethodStyleWrap method={operation.method}>
              {operation.method === MethodType.delete ? operation.method.slice(0, 3) : operation.method}
            </MethodStyleWrap>
            {!isCollapsed ? (
              <OperationDescStyleWrap deprecated={operation.deprecated}>
                <div
                  css={{
                    fontSize: dsc.fontSize.xs,
                    fontWeight: "bold",
                    marginBottom: 4,
                  }}
                >
                  {operation.operationId || ""}
                </div>
                <div css={{ fontSize: dsc.fontSize.xxs }}>
                  {operation.summary || ""}
                  &nbsp;
                </div>
              </OperationDescStyleWrap>
            ) : (
              <div style={{ height: 30 }} />
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

export function OperationList(props: ICollapsed) {
  const { operationId } = useParams();
  // const openapiWithServiceInfo = useOpenapiInfo();
  const { openapiWithServiceInfo } = useOpenapiWithServiceInfoStore();
  const operations = openapiWithServiceInfo?.operations || ({} as IOperationEnhanceMap);
  const [filterValue, setFilterValue] = useState("");
  const [groupedOperations, setGroupedOperations] = useState({} as Dictionary<IOperationEnhance[]>);

  useDebounceEffect(
    () => {
      if (!isEmpty(operations)) {
        let operationList = filterValue
          ? filter(operations, (k) => includes(toLower(k.operationId) || "", toLower(filterValue)))
          : operations;

        operationList = filter(operationList, (operation: IOperationEnhance) => {
          return !["OpenAPI", "ER"].includes(operation.operationId || "");
        }) as IOperationEnhance[];

        // groupBy group field
        const groupedOperations = groupBy(operationList, (operation: IOperationEnhance) => operation.group);

        setGroupedOperations(groupedOperations);
      }
    },
    [operations, filterValue],
    {
      wait: 500,
      leading: true,
    },
  );

  return (
    <div css={{ position: "relative" }}>
      <div css={{ fontSize: dsc.fontSize.xs, padding: "0.5em 0.8em" }}>
        <Input
          placeholder="please enter operationID to search"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
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
