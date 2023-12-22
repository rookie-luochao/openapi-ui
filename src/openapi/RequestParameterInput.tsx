import { MinusOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Input, Select, Upload } from "antd";
import { filter, map } from "lodash-es";
import React, { ReactNode, useState } from "react";
import { Dictionary } from "react-router-toolkit";
import { IJSONInputProps, IJSONInputWithSchemaProps, JSONInput } from "../components/monaco-editor/JSONInput";
import { dsc } from "../core/style/defaultStyleConfig";
import { Description, SchemaView } from "./SchemaView";
import { ParameterPositionIconComp } from "./config";
import { displayDefault, displayType, displayValidate, toEnumMap } from "./displayType";
import { isArraySchema, isObjectSchema, patchSchema } from "./patchSchema";
import { ISchema, TParameter } from "./type";
import { withoutBubble } from "./util";

function LabelStyleWrap({ children, required }: { required?: boolean; children?: React.ReactNode }) {
  return (
    <div
      css={{
        ...(required
          ? {
              position: "relative",
              fontWeight: "bold",
              "&:after": {
                content: `"*"`,
                color: dsc.color.danger,
                position: "absolute",
                top: "15%",
                marginLeft: 1,
              },
            }
          : {}),
      }}
    >
      {children}
    </div>
  );
}

function FieldLabelWithSchemaWrap(props: {
  schema: any;
  schemas: any;
  children: ReactNode;
  fieldLabel?: ReactNode;
  fieldDesc?: ReactNode;
}) {
  const { schema, fieldLabel, fieldDesc, schemas, children } = props;

  return (
    <div style={{ fontSize: dsc.fontSize.xxs }}>
      <div>
        <div css={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
          {fieldLabel}
          {fieldDesc}
        </div>
        <div>{children}</div>
      </div>
      {schema && (isObjectSchema(schema) || isArraySchema(schema)) && (
        <SchemaView schema={schema} schemas={schemas} css={{ overflow: "auto" }} />
      )}
    </div>
  );
}

function Row({ children }: { children: ReactNode }) {
  return (
    <div
      css={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        "& [role=input]": { flex: 1 },
        "& [role=btn]": {
          width: "2em",
          display: "flex",
          justifyContent: "center",
          opacity: 0.5,
          cursor: "pointer",
        },
        "& + &": {
          marginTop: 6,
        },
      }}
    >
      {children}
    </div>
  );
}

interface IOption<T> {
  label: string;
  value: T;
}

function enumToOptions<T>(list: T[], enumMap: { [key: string]: string }): Array<IOption<T>> {
  return map(list, (value) => ({
    label: `${(enumMap as any)[value] || " "} ${value}`,
    value,
  }));
}

function isFile(schema: any) {
  return (
    // schema.type === "file" for Swagger 2
    schema && (schema.type === "file" || (schema.type === "string" && schema.format === "binary"))
  );
}

export function PatchInput({ schema, ...commonProps }: IJSONInputWithSchemaProps) {
  const isArray = isArraySchema(schema as any);
  const placeholder = displayType(schema) + displayValidate(schema) + displayDefault(schema);

  if (schema.enum) {
    const enumMap = toEnumMap(schema);

    return <Select {...commonProps} placeholder={placeholder} options={enumToOptions(schema.enum, enumMap)} />;
  }

  if (schema.type === "boolean") {
    return (
      <Select
        {...commonProps}
        placeholder={placeholder}
        options={[
          {
            label: "是",
            value: true,
          },
          {
            label: "否",
            value: false,
          },
        ]}
      />
    );
  }

  if (isFile(schema) || (isArray && isFile(schema.items))) {
    return (
      <Upload
        {...commonProps}
        multiple={isArray}
        maxCount={isArray ? undefined : 1}
        fileList={isArray ? commonProps.value : commonProps.value ? [commonProps.value] : []}
        onChange={(file) => {
          commonProps.onChange(isArray ? file.fileList : file.file);
        }}
        beforeUpload={() => false}
      >
        <Button icon={<UploadOutlined />}>{placeholder || "Upload"}</Button>
      </Upload>
    );
  }

  return <Input {...commonProps} placeholder={placeholder} />;
}

export function ValueInput({ schema, ...commonProps }: IJSONInputWithSchemaProps) {
  const [value, setValue] = useState(commonProps.value);

  const commit = () => {
    commonProps.onChange(value);
    setValue(undefined);
  };

  return (
    <>
      <span
        role={"input"}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            commit();
          }
        }}
      >
        <PatchInput
          {...commonProps}
          schema={schema as any}
          value={value}
          onChange={(nextV) => {
            setValue(nextV);
          }}
        />
      </span>
      <span
        role={"btn"}
        onClick={withoutBubble(() => {
          commit();
        })}
      >
        <PlusOutlined />
      </span>
    </>
  );
}

interface TParamInputProps {
  schemas: Dictionary<ISchema>;
  parameter: TParameter;
}

export const RequestParameterInput = ({
  schemas,
  parameter,
  ...otherProps
}: TParamInputProps & Partial<IJSONInputProps>) => {
  const schema = patchSchema<TParameter>(parameter.schema || parameter, schemas);

  const isArray = isArraySchema(schema as any);
  const commonProps = {
    value: isArray ? (otherProps.value ? [].concat(otherProps.value) : []) : otherProps.value,
    onChange: otherProps.onChange ? otherProps.onChange : () => undefined,
  };

  const fieldLabel = (
    <LabelStyleWrap required={parameter.required}>
      <ParameterPositionIconComp position={parameter.in} />
      {parameter.name}
    </LabelStyleWrap>
  );

  const fieldDesc = <Description desc={parameter.description || schema.description || ""} />;

  if (isObjectSchema(schema as any) || (isArray && isObjectSchema(schema.items))) {
    return (
      <FieldLabelWithSchemaWrap schema={schema} schemas={schemas} fieldLabel={fieldLabel} fieldDesc={fieldDesc}>
        <JSONInput {...commonProps} schema={schema as any} />
      </FieldLabelWithSchemaWrap>
    );
  }

  if (isArray) {
    return (
      <FieldLabelWithSchemaWrap schema={schema} schemas={schemas} fieldLabel={fieldLabel} fieldDesc={fieldDesc}>
        {map(commonProps.value, (value, index) => (
          <Row key={index}>
            <span role="input">
              <PatchInput
                {...commonProps}
                schema={schema.items}
                value={value}
                onChange={(nextValue: string) => {
                  commonProps.onChange(map(commonProps.value, (val, idx) => (index === idx ? nextValue : val)));
                }}
              />
            </span>
            <span
              role="btn"
              onClick={withoutBubble(() => {
                commonProps.onChange(filter(commonProps.value, (_, idx) => index !== idx));
              })}
            >
              <MinusOutlined />
            </span>
          </Row>
        ))}
        <Row>
          <ValueInput
            key="input"
            schema={schema.items}
            value={commonProps.value}
            onChange={(v) => {
              commonProps.onChange(commonProps.value.concat(v));
            }}
          />
        </Row>
      </FieldLabelWithSchemaWrap>
    );
  }

  return (
    <FieldLabelWithSchemaWrap schema={schema} schemas={schemas} fieldLabel={fieldLabel} fieldDesc={fieldDesc}>
      <PatchInput {...commonProps} schema={schema as any} />
    </FieldLabelWithSchemaWrap>
  );
};
