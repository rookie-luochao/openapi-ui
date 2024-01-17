import { map } from "lodash-es";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { Section } from "../components/Section";
import { useOpenapiWithServiceInfoStore } from "../core/store";
import { dsc } from "../core/style/defaultStyleConfig";
import { Responses } from "./OpenapiViewComp";
import { RequestBuilder } from "./RequestBuilder";
import { ParameterPositionIconComp, parameterPositionMap } from "./config";
import { getAxiosBasePathByUrl, getMethodColor } from "./util";

export default function OpenapiView() {
  const { operationId } = useParams();
  const { t } = useTranslation();
  const { openapiWithServiceInfo } = useOpenapiWithServiceInfoStore();

  if (!openapiWithServiceInfo?.operations || !operationId) {
    return null;
  }

  const operation = openapiWithServiceInfo.operations[operationId] || {};
  const methodStyle = operation.method ? { color: getMethodColor(operation.method) } : {};
  const commonColorStyle = { color: dsc.color.primary };

  return (
    <div>
      <div
        css={{
          borderRadius: 6,
          overflow: "hidden",
          border: `1px solid ${methodStyle.color}`,
        }}
      >
        <div
          css={{
            backgroundColor: methodStyle.color,
            padding: 10,
            color: dsc.color.bg,
          }}
        >
          <div
            css={{
              textDecoration: operation.deprecated ? "line-through" : "none",
              marginBottom: 8,
            }}
          >
            <span
              title={operation.operationId}
              css={{
                fontSize: dsc.fontSize.s,
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              {operation.operationId}
            </span>
            <span title={operation.summary} css={{ fontSize: dsc.fontSize.xxs }}>
              {operation.summary}
            </span>
          </div>
          <div
            css={{
              fontSize: dsc.fontSize.s,
            }}
          >
            <span css={{ textTransform: "uppercase", fontFamily: dsc.fontFamily.mono }}>{operation.method}</span>
            <span
              css={{
                display: "inline-block",
                marginLeft: 8,
              }}
            >
              {operation.path}
            </span>
          </div>
        </div>
        <div css={{ padding: 16 }}>
          {operation.description && (
            <Section title={<span css={commonColorStyle}>{t("openapi.description")}</span>}>
              <ReactMarkdown>{operation.description}</ReactMarkdown>
            </Section>
          )}
          <Section
            title={
              <span>
                <span css={commonColorStyle}>{t("openapi.parameters")}</span>
                <small
                  css={{
                    lineHeight: 1.4,
                    fontSize: "0.8em",
                    marginBottom: "0.5em",
                    color: dsc.color.text,
                  }}
                >
                  {map(parameterPositionMap, (label, position) => (
                    <span
                      key={position}
                      css={{
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
          <Section title={<span css={commonColorStyle}>{t("openapi.responses")}</span>}>
            <Responses operation={operation} />
          </Section>
        </div>
      </div>
    </div>
  );
}
