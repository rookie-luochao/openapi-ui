import { useTheme } from "@emotion/react";
import { Tooltip } from "antd";
import { includes, isEmpty, isObject, keys, map, sortBy } from "lodash-es";
import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import { Dictionary } from "react-router-toolkit";

import { ITheme, dsc } from "@/core/style/defaultStyleConfig";
import { ISchema } from "@/pages/openapi/common/type";

import { displayClassName } from "./displayType";
import { isArraySchema, isObjectSchema, patchSchema } from "./patchSchema";

export const schemaOpacity = 0.6;

function SchemaNameWrapView({
  deprecated,
  required,
  children,
}: { deprecated?: boolean; required?: boolean } & React.HTMLAttributes<any>) {
  const theme = useTheme() as ITheme;

  return (
    <>
      <span
        css={[
          {
            color: theme.color.textLight,
            fontWeight: 500,
          },
          deprecated && {
            textDecoration: "line-through",
          },
        ]}
      >
        {children}
      </span>
      {!required && <span style={{ fontWeight: 700, color: theme.color.text }}>?</span>}
    </>
  );
}

function defaultNameRenderer(name: string, required: boolean, schema: ISchema = {}) {
  if (!name) return;

  return (
    <SchemaNameWrapView deprecated={schema.deprecated} required={required}>
      {name}
    </SchemaNameWrapView>
  );
}

const SchemaTypeWrapView = (props: React.HTMLAttributes<any>) => {
  const theme = useTheme() as ITheme;

  return (
    <span
      {...props}
      style={{
        display: "block",
        fontWeight: "bold",
        marginBottom: 16,
        color: theme.color.title,
      }}
    />
  );
};

const defaultTypeRenderer = (type: React.ReactNode) => <SchemaTypeWrapView>{type}</SchemaTypeWrapView>;

interface ISchemaRowProps extends ISchemaProps {
  nameRenderer?: (name: string, required: boolean, schema: ISchema) => React.ReactNode;
  typeRenderer?: (type: React.ReactNode, schema: ISchema) => React.ReactNode;
}

export function Description({
  desc,
  prefix,
  ishighLightDesc,
  isBreakWord,
}: {
  desc: string;
  prefix?: string;
  ishighLightDesc?: boolean;
  isBreakWord?: true;
}) {
  const theme = useTheme() as ITheme;
  const lines = (desc || "").split("\n");
  const style: React.CSSProperties = {
    position: "relative",
    whiteSpace: "nowrap",
    color: ishighLightDesc ? theme.color.title : theme.color.textLight,
  };

  if (lines.length > 1) {
    const line = lines[0];
    lines.shift();

    return (
      <Tooltip
        style={{ userSelect: "auto" }}
        title={<ReactMarkdown css={{ maxWidth: "200px" }}>{lines.join("\n\n")}</ReactMarkdown>}
      >
        <span style={style}>
          <span>
            {prefix}
            {line}
          </span>
          <span
            style={{
              display: "inline-block",
              marginLeft: "0.5em",
              width: "1em",
              height: "1em",
              textAlign: "center",
              lineHeight: "1em",
              borderRadius: "100%",
              backgroundColor: theme.color.primary,
              color: theme.color.bg,
            }}
          >
            ?
          </span>
        </span>
      </Tooltip>
    );
  }

  return (
    <span style={{ ...style, whiteSpace: isBreakWord ? "break-spaces" : "nowrap", textAlign: "right" }}>
      {prefix}
      {desc}
    </span>
  );
}

function SchemaRow(props: ISchemaRowProps) {
  const { schema, name, required, nameRenderer = defaultNameRenderer, typeRenderer = defaultTypeRenderer } = props;

  return (
    <span
      style={{
        fontSize: dsc.fontSize.s,
        position: "relative",
        display: "flex",
        whiteSpace: "nowrap",
        lineHeight: 1.4,
      }}
    >
      {name && (
        <span
          style={{
            display: "block",
            position: "relative",
            paddingRight: "0.5em",
          }}
        >
          {nameRenderer(name, !!required, schema)}
        </span>
      )}
      {schema.description && (
        <span
          style={{
            display: "block",
            position: "absolute",
            top: "-10px",
            left: 0,
            lineHeight: 1,
            fontSize: dsc.fontSize.xs,
          }}
        >
          <Description desc={schema.description} prefix={"// "} />
        </span>
      )}
      <span
        style={{
          display: "block",
        }}
      >
        {typeRenderer(displayClassName(schema), schema)}
      </span>
    </span>
  );
}

function SchemaStructWrapView({
  title,
  isStruct,
  children,
}: {
  title: ReactNode;
  isStruct?: boolean;
  children: ReactNode;
}) {
  const { t } = useTranslation();
  const theme = useTheme() as ITheme;
  const [isExpandStruct, setIsExpandStruct] = useState(true);

  return (
    <>
      <SchemaTypeWrapView>
        {title}
        {isStruct && (
          <a
            style={{ fontSize: dsc.fontSize.xxs, marginLeft: 4, color: theme.color.primary }}
            onClick={() => setIsExpandStruct(!isExpandStruct)}
          >
            {isExpandStruct ? t("openapi.collapse") : t("openapi.expand")}
          </a>
        )}
      </SchemaTypeWrapView>
      <div style={isExpandStruct ? {} : { height: 0, overflow: "hidden", opacity: 0 }}>{children}</div>
    </>
  );
}

function renderSchema(schema: ISchema, name?: string, required?: boolean): React.ReactNode {
  if (isArraySchema(schema)) {
    return (
      <SchemaRow
        key={name}
        name={name}
        required={required}
        schema={schema}
        typeRenderer={() => {
          // const shouldShowClassName = !!schema["x-id"] && !isObjectSchema(schema.items || {});

          return (
            <span>
              <span style={{ display: "flex" }}>
                <SchemaTypeWrapView>
                  [{schema.maxItems && schema.maxItems === schema.minItems ? schema.minItems : ""}]
                </SchemaTypeWrapView>
                {renderSchema(schema.items || {}, undefined, undefined)}
              </span>
              {/* {shouldShowClassName && (
                <span
                  css={{
                    display: "block",
                    lineHeight: 1.4,
                    opacity: 0.5,
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  {type}
                </span>
              )} */}
            </span>
          );
        }}
      />
    );
  }

  if (isObjectSchema(schema)) {
    return (
      <SchemaRow
        key={name}
        name={name}
        required={required}
        schema={schema}
        typeRenderer={(type) => {
          const asMap = isObject(schema.additionalProperties);

          return (
            <div style={asMap ? { display: "flex" } : {}}>
              <SchemaStructWrapView
                isStruct={!isEmpty(schema.properties)}
                title={
                  <>
                    {asMap ? (
                      <span>
                        <span>map[</span>
                        {displayClassName(schema.propertyNames || { type: "string" })}
                        <span>]</span>
                      </span>
                    ) : (
                      <span>
                        {type}
                        <small style={{ opacity: schemaOpacity, fontWeight: "normal" }}>{"{}"}</small>
                      </span>
                    )}
                  </>
                }
              >
                <div>
                  {asMap ? (
                    <>{renderSchema(schema.additionalProperties as ISchema)}</>
                  ) : (
                    <>
                      {map(sortBy(keys(schema.properties || {})), (propName: string) => {
                        const propSchema = (schema.properties || {})[propName];

                        return (
                          <span
                            key={propName}
                            style={{
                              display: "block",
                              position: "relative",
                              padding: "0 1em",
                            }}
                          >
                            {renderSchema(propSchema, propName, includes(schema.required || [], propName))}
                          </span>
                        );
                      })}
                    </>
                  )}
                </div>
              </SchemaStructWrapView>
            </div>
          );
        }}
      />
    );
  }

  return <SchemaRow key={name} name={name} required={required} schema={schema} />;
}

interface ISchemaProps {
  schema: ISchema;
  name?: string;
  required?: boolean;
}

export function SchemaView({ schema, schemas }: ISchemaProps & { schemas: Dictionary<ISchema> }) {
  if (isEmpty(schema)) {
    return null;
  }

  const patchedSchema = patchSchema<ISchema>(schema, schemas);

  return <div style={{ padding: "1.4em 1em", overflowX: "auto" }}>{renderSchema(patchedSchema)}</div>;
}
