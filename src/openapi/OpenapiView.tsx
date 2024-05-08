import { useTheme } from "@emotion/react";
import { Tooltip, message } from "antd";
import copy from "copy-to-clipboard";
import { map } from "lodash-es";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { Section } from "../components/Section";
import { useConfigInfoStore, useOpenapiWithServiceInfoStore } from "../core/store";
import { ITheme, dsc } from "../core/style/defaultStyleConfig";
import { Responses } from "./OpenapiViewComp";
import { RequestBuilder } from "./RequestBuilder";
import { ParameterPositionIconComp, parameterPositionMap } from "./config";
import { getAxiosBasePathByUrl, getMethodColor } from "./util";

export default function OpenapiView() {
  const { operationId } = useParams();
  const { t } = useTranslation();
  const { openapiWithServiceInfo } = useOpenapiWithServiceInfoStore();
  const theme = useTheme() as ITheme;
  const { configInfo } = useConfigInfoStore();

  if (!openapiWithServiceInfo?.operations || !operationId) {
    return null;
  }

  const operation = openapiWithServiceInfo.operations[operationId] || {};
  const methodStyle = operation.method ? { color: getMethodColor(operation.method) } : {};
  const isDarkTheme = configInfo?.theme === "dark";

  return (
    <div>
      <div
        style={{
          borderRadius: 6,
          overflow: "hidden",
          border: `1px solid ${isDarkTheme ? theme.color.border : methodStyle.color}`,
        }}
      >
        <div
          style={{
            backgroundColor: isDarkTheme ? theme.color.descCardBg : methodStyle.color,
            padding: 10,
            color: theme.color.menuGroup,
          }}
        >
          <div
            style={{
              textDecoration: operation.deprecated ? "line-through" : "none",
              marginBottom: 8,
            }}
          >
            <Tooltip title={t("openapi.clickToCopy")}>
              <a
                style={{
                  fontWeight: "bold",
                  marginRight: 10,
                  color: theme.color.menuGroup,
                }}
                onClick={() => {
                  copy(operation.operationId);
                  message.success(t("openapi.copySuccess"));
                }}
              >
                {operation.operationName}
              </a>
            </Tooltip>
            <span title={operation.summary} style={{ fontSize: dsc.fontSize.xs }}>
              {operation.summary}
            </span>
          </div>
          <div>
            <span style={{ textTransform: "uppercase", fontFamily: dsc.fontFamily.mono }}>{operation.method}</span>
            <span
              style={{
                display: "inline-block",
                marginLeft: 8,
              }}
            >
              {operation.path}
            </span>
          </div>
        </div>
        <div style={{ padding: 16 }}>
          {operation.description && (
            <Section title={t("openapi.description")}>
              <ReactMarkdown css={isDarkTheme ? { color: theme.color.textLight } : null}>
                {operation.description}
              </ReactMarkdown>
            </Section>
          )}
          <Section
            title={
              <span>
                <span>{t("openapi.parameters")}</span>
                <small
                  style={{
                    lineHeight: 1.4,
                    marginBottom: "0.5em",
                    color: theme.color.title,
                  }}
                >
                  {map(parameterPositionMap, (label, position) => (
                    <span
                      key={position}
                      style={{
                        marginLeft: "1em",
                      }}
                    >
                      <ParameterPositionIconComp position={position} />
                      <span>{label}</span>
                    </span>
                  ))}
                </small>
              </span>
            }
          >
            <RequestBuilder
              schemas={openapiWithServiceInfo.openapi.components?.schemas || {}}
              operation={{
                ...operation,
                basePath: getAxiosBasePathByUrl(openapiWithServiceInfo.serviceURL),
              }}
            />
          </Section>
          <Section title={t("openapi.responses")}>
            <Responses operation={operation} />
          </Section>
        </div>
      </div>
    </div>
  );
}
