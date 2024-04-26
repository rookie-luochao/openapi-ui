import { forEach, has, isEmpty, isObject, mapValues, reduce, replace, startsWith, uniq } from "lodash-es";
import { Dictionary } from "react-router-toolkit";
import { ISchema } from "./type";

export const isObjectSchema = (schema: ISchema) => schema.type === "object" || has(schema, "properties");
export const isArraySchema = (schema: ISchema) => schema.type === "array" || has(schema, "items");

export function patchSchema<T extends object>(schema: any, schemas: Dictionary<ISchema>): T {
  if (isEmpty(schema)) {
    return {} as T;
  }

  if (has(schema, "allOf")) {
    return reduce(
      schema.allOf,
      (last, s) => {
        const f: Dictionary<any> = {
          ...(last || {}),
        };
        const next = patchSchema<ISchema>(s, schemas);

        forEach(next, (v, k) => {
          switch (k) {
            case "properties":
              f[k] = {
                ...f[k],
                ...(v || {}),
              };
              break;
            case "required":
              f[k] = uniq((f[k] || []).concat(v));
              break;
            default: {
              f[k] = v;
            }
          }
        });
        return f;
      },
      {},
    ) as T;
  }

  if (startsWith(schema.$ref, "#/components/schemas/")) {
    const refId = replace(schema.$ref, "#/components/schemas/", "") || schema["x-id"];

    if (schemas[refId]) {
      return {
        ...schema,
        ...patchSchema<ISchema>(schemas[refId], schemas),
        "x-id": refId,
        $ref: undefined,
      };
    }
  }

  if (isObjectSchema(schema)) {
    const patchedProperties = mapValues(schema.properties, (propSchema) => patchSchema<ISchema>(propSchema, schemas));

    if (isObject(schema.additionalProperties)) {
      const additionalProperties: ISchema = patchSchema<ISchema>(schema.additionalProperties, schemas);

      if (isObject(schema.propertyNames)) {
        const propertyNames: ISchema = patchSchema<ISchema>(schema.propertyNames, schemas);

        return {
          ...schema,
          additionalProperties,
          propertyNames: propertyNames,
        };
      }

      return {
        ...schema,
        additionalProperties,
      };
    }

    return {
      ...schema,
      properties: patchedProperties,
    };
  }

  if (isArraySchema(schema)) {
    return {
      ...schema,
      items: patchSchema<ISchema>(schema.items, schemas),
    };
  }

  return schema;
}
