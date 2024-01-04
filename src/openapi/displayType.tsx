import { forEach, has, map, replace, some } from "lodash-es";
import { dsc } from "../core/style/defaultStyleConfig";

function highlightType(v: string) {
  const parts = /^([^<>]+)(<(.+)>)?$/.exec(v);

  if (!parts) {
    return null;
  }

  return (
    <span>
      {parts[1]}
      <small css={{ opacity: 0.6, fontWeight: "normal" }}>{parts[2]}</small>
    </span>
  );
}

function parseType(type: string, format: string, id?: string) {
  if (format || id) {
    return `${type}<${[id, format].filter((v) => v).join(",")}>`;
  }

  return type || "any";
}

export function displayType(schema: any, id?: string): string {
  if (schema.type === "array" && schema.items) {
    return `[${schema.minItems && schema.minItems === schema.maxItems ? schema.minItems : ""}]${displayType(
      schema.items,
      id || schema["x-id"],
    )}`;
  }

  return parseType(schema.type as string, schema.format || "", schema["x-id"] || id);
}

export function toEnumMap(schema: any) {
  const options = (schema["x-enum-options"] as any[]) || [];
  const enumMap: { [key: string]: string } = {};

  forEach(options, (option) => {
    enumMap[option.value] = option.label;
  });

  return enumMap;
}

export interface IValidatedSchema {
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
}

function hasValidate(schema: any) {
  return some(
    [
      "maximum",
      "exclusiveMaximum",
      "minimum",
      "exclusiveMinimum",
      "maxLength",
      "minLength",
      "pattern",
      "maxItems",
      "minItems",
      "maxProperties",
      "minProperties",
    ] as Array<keyof IValidatedSchema>,
    (key) => has(schema, key),
  );
}

function getMin(schema: any) {
  if (has(schema, "minProperties")) {
    return schema.minProperties;
  }

  if (has(schema, "minItems")) {
    return schema.minItems;
  }

  if (has(schema, "minimum")) {
    return schema.minimum;
  }

  if (has(schema, "minLength")) {
    return schema.minLength;
  }

  if (schema.type === "string") {
    return "0";
  }

  if ((schema.type === "number" || schema.type === "integer") && schema.format) {
    return Math.pow(2, Number(replace(schema.format, /[^0-9]/g, "")) - 1) - 1;
  }

  return "-∞";
}

function getMax(schema: any) {
  if (has(schema, "maxProperties")) {
    return schema.maxProperties;
  }

  if (has(schema, "maxItems")) {
    return schema.maxItems;
  }

  if (has(schema, "maximum")) {
    return schema.maximum;
  }

  if (has(schema, "maxLength")) {
    return schema.maxLength;
  }

  if (schema.type === "string" && schema.format === "uint64") {
    return "19";
  }

  if ((schema.type === "number" || schema.type === "integer") && schema.format) {
    return Math.pow(2, Number(replace(schema.format, /[^0-9]/g, "")) - 1) - 1;
  }

  return "+∞";
}

export function displayValidate(schema: any): string {
  if (schema["x-tag-validate"]) {
    return schema["x-tag-validate"];
  }

  if (!hasValidate(schema)) {
    return "";
  }

  if (schema.pattern) {
    return `@r/${schema.pattern}/`;
  }

  return `@${schema.exclusiveMinimum ? "(" : "["}${getMin(schema)},${getMax(schema)}${
    schema.exclusiveMaximum ? ")" : "]"
  }`;
}

export function displayDefault(schema: any): string {
  if (!schema.default) {
    return "";
  }

  const defaultValue = schema.type === "string" ? JSON.stringify(schema.default) : schema.default;

  return ` = ${defaultValue}`;
}

export function displayClassName(schema: any): React.ReactNode {
  if (schema.enum) {
    return (
      <span style={{ display: "block" }}>
        {highlightType(displayType(schema))}
        <div
          css={{
            fontSize: "0.8em",
            paddingLeft: "1em",
            paddingBottom: "0.6em",
          }}
        >
          {map(toEnumMap(schema), (label, key) => (
            <div key={key} css={{ display: "flex", lineHeight: 1.4, opacity: 0.6 }}>
              <span>{key}</span>
              <span css={{ fontWeight: "normal", opacity: 0.8, marginLeft: "1em" }}>{`// ${label}`}</span>
            </div>
          ))}
        </div>
      </span>
    );
  }

  return (
    <span>
      {highlightType(displayType(schema))}
      <span css={{ color: dsc.color.text, opacity: 0.8, fontSize: "0.8em" }}>
        {displayValidate(schema)}
        {displayDefault(schema)}
      </span>
    </span>
  );
}
