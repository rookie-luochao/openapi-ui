import { Tooltip } from "antd";
import { includes, isEmpty, isObject, keys, map, sortBy } from "lodash-es";
import ReactMarkdown from "react-markdown";
import { Dictionary } from "react-router-toolkit";
import { dsc } from "../core/style/defaultStyleConfig";
import { displayClassName } from "./displayType";
import { isArraySchema, isObjectSchema, patchSchema } from "./patchSchema";
import { ISchema } from "./type";

function SchemaNameWrapView({
  deprecated,
  required,
  children,
}: { deprecated?: boolean; required?: boolean } & React.HTMLAttributes<any>) {
  return (
    <>
      <span
        css={[
          {
            color: dsc.color.text,
            opacity: 0.6,
            fontWeight: 500,
          },
          deprecated && {
            textDecoration: "line-through",
          },
        ]}
      >
        {children}
      </span>
      {!required && <span style={{ fontWeight: 700, fontSize: dsc.fontSize.xs }}>?</span>}
    </>
  );
}

function defaultNameRenderer(name: string, required: boolean, schema: ISchema = {}) {
  if (!name) return;

  return (
    <SchemaNameWrapView required={required} deprecated={schema.deprecated}>
      {name}
    </SchemaNameWrapView>
  );
}

const SchemaTypeWrapView = (props: React.HTMLAttributes<any>) => (
  <span
    {...props}
    css={{
      display: "block",
      fontWeight: "bold",
      marginBottom: "1em",
    }}
  />
);

const defaultTypeRenderer = (type: React.ReactNode) => <SchemaTypeWrapView>{type}</SchemaTypeWrapView>;

interface ISchemaRowProps extends ISchemaProps {
  nameRenderer?: (name: string, required: boolean, schema: ISchema) => React.ReactNode;
  typeRenderer?: (type: React.ReactNode, schema: ISchema) => React.ReactNode;
}

export function Description({ desc, prefix }: { desc: string; prefix?: string }) {
  const lines = (desc || "").split("\n");

  if (lines.length > 1) {
    const line = lines[0];
    lines.shift();

    return (
      <Tooltip
        css={{ userSelect: "auto" }}
        title={<ReactMarkdown css={{ maxWidth: "200px" }}>{lines.join("\n\n")}</ReactMarkdown>}
      >
        <span css={{ position: "relative", whiteSpace: "nowrap" }}>
          <span>
            {prefix}
            {line}
          </span>
          <span
            css={{
              display: "inline-block",
              marginLeft: "0.5em",
              width: "1em",
              height: "1em",
              textAlign: "center",
              lineHeight: "1em",
              borderRadius: "100%",
              backgroundColor: dsc.color.primary,
              color: dsc.color.bg,
            }}
          >
            ?
          </span>
        </span>
      </Tooltip>
    );
  }

  return (
    <span css={{ position: "relative", whiteSpace: "nowrap" }}>
      {prefix}
      {desc}
    </span>
  );
}

function SchemaRow(props: ISchemaRowProps) {
  const { schema, name, required, nameRenderer = defaultNameRenderer, typeRenderer = defaultTypeRenderer } = props;

  return (
    <span
      css={{
        fontSize: dsc.fontSize.xs,
        position: "relative",
        display: "flex",
        whiteSpace: "nowrap",
        lineHeight: 1.4,
      }}
    >
      {name && (
        <span
          css={{
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
          css={{
            position: "absolute",
            top: "-0.8em",
            left: 0,
            display: "block",
            lineHeight: 1,
            fontSize: dsc.fontSize.xxs,
            opacity: 0.5,
            color: dsc.color.text,
          }}
        >
          <Description desc={schema.description} prefix={"// "} />
        </span>
      )}
      <span
        css={{
          display: "block",
        }}
      >
        {typeRenderer(displayClassName(schema), schema)}
      </span>
    </span>
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
        typeRenderer={(type) => {
          const shouldShowClassName = !!schema["x-id"] && !isObjectSchema(schema.items || {});

          return (
            <span>
              <span css={{ display: "flex" }}>
                <SchemaTypeWrapView>
                  [{schema.maxItems && schema.maxItems === schema.minItems ? schema.minItems : ""}]
                </SchemaTypeWrapView>
                {renderSchema(schema.items || {}, undefined, undefined)}
              </span>
              {shouldShowClassName && (
                <span
                  css={{
                    display: "block",
                    lineHeight: 1.4,
                    fontSize: dsc.fontSize.xxs,
                    opacity: 0.5,
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  {type}
                </span>
              )}
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
            <div css={() => [asMap && { display: "flex" }]}>
              {asMap ? (
                <SchemaTypeWrapView>
                  <span css={{ display: "flex" }}>
                    <span>map[</span>
                    {displayClassName(schema.propertyNames || { type: "string" })}
                    <span>]</span>
                  </span>
                </SchemaTypeWrapView>
              ) : (
                <SchemaTypeWrapView>
                  {type}
                  <small css={{ opacity: 0.5, fontWeight: "normal" }}>{"{}"}</small>
                </SchemaTypeWrapView>
              )}
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
                          css={() => [
                            {
                              display: "block",
                              position: "relative",
                              padding: "0 1em",
                            },
                          ]}
                        >
                          {renderSchema(propSchema, propName, includes(schema.required || [], propName))}
                        </span>
                      );
                    })}
                  </>
                )}
              </div>
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
    return <span />;
  }

  const patchedSchema = patchSchema(schema, schemas);

  return <div css={{ padding: "1em 2em" }}>{renderSchema(patchedSchema)}</div>;
}
