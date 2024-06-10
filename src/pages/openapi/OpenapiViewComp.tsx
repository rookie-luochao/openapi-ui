import { useTheme } from "@emotion/react";
import { map, replace, sortBy } from "lodash-es";
import { Dictionary } from "react-router-toolkit";

import { useOpenapiWithServiceInfoStore } from "@/core/store";
import { ITheme, dsc } from "@/core/style/defaultStyleConfig";
import { IMediaType, IOperationEnhance, IReference, IResponse, IResponses, ISchema } from "@/type";

import { IStatusError, getCodeColor, getHttpErrorDes, pickHttpError } from "./common/utils";
import { SchemaView } from "./components/schema-view/SchemaView";

export function Responses({ operation }: { operation: IOperationEnhance }) {
  const { openapiWithServiceInfo } = useOpenapiWithServiceInfoStore();

  if (!openapiWithServiceInfo) {
    return null;
  }

  return (
    <div>
      {map(operation.responses as IResponses, (response: IResponse | IReference, code: number) => {
        const schemas = openapiWithServiceInfo.openapi.components?.schemas || {};

        if (response.$ref) {
          const schemaName = replace(response.$ref, "#/responses/", "");

          return (
            <ResponseItem
              key={code}
              code={code}
              response={openapiWithServiceInfo.openapi.responses[schemaName] || {}}
              schemas={schemas}
            />
          );
        }

        return <ResponseItem key={code} code={code} response={response as IResponse} schemas={schemas} />;
      })}
    </div>
  );
}

interface IResponseItemProps {
  code: number;
  response: IResponse;
  schemas: Dictionary<ISchema>;
}

function ResponseItem({ code, response, schemas }: IResponseItemProps) {
  const theme = useTheme() as ITheme;
  const httpErrorList = pickHttpError(response["x-status-errors"]);

  return (
    <div
      style={{
        padding: "0.5em 0",
        borderBottom: `1px solid ${theme.color.border}`,
        display: "flex",
        alignItems: "flex-start",
        lineHeight: 2,
      }}
    >
      <div style={{ flex: 1, display: "flex", alignItems: "flex-start" }}>
        <div>
          <HttpCode code={code} />
        </div>
        <div style={{ flex: 1, marginLeft: "0.5em" }}>
          <div style={{ color: theme.color.title }}>{getHttpErrorDes(response.description)}</div>
          <HttpErrorList httpErrorList={httpErrorList} />
        </div>
      </div>
      <div style={{ width: "70%" }}>
        {!!response.content &&
          map(response.content, (mediaType: IMediaType, contentType: string) => {
            return (
              <div
                key={contentType}
                style={{
                  position: "relative",
                  padding: "0.4em 0.6em",
                  width: "100%",
                  overflow: "auto",
                }}
              >
                <div
                  style={{
                    color: theme.color.textLight,
                    fontSize: dsc.fontSize.xs,
                    textAlign: "right",
                  }}
                >
                  {contentType}
                </div>
                <SchemaView schema={mediaType.schema!} schemas={schemas} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export function HttpCode({ code }: { code: number }) {
  return (
    <div
      style={{
        fontWeight: "bold",
        color: getCodeColor(code),
      }}
    >
      {code}
    </div>
  );
}

function HttpErrorList({ httpErrorList }: { httpErrorList: IStatusError[] }): React.ReactNode {
  const theme = useTheme() as ITheme;

  return (
    <div>
      {map(sortBy(httpErrorList, "name"), (httpError, index) => (
        <div key={`${httpError.code}${index}`}>
          <div
            style={{
              color: theme.color.title,
              fontWeight: "bold",
              marginRight: "0.5em",
              textDecoration: httpError.canBeTalkError ? "underline" : "none",
            }}
          >
            {httpError.name}
            <small
              style={{
                opacity: 0.6,
                marginLeft: "0.5em",
                fontWeight: "bold",
              }}
            >
              {httpError.code}
            </small>
          </div>
          <small style={{ lineHeight: 1, display: "block", color: theme.color.title }}>{httpError.msg}</small>
        </div>
      ))}
    </div>
  );
}
