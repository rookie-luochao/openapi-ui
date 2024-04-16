import { Button, DatePicker, DatePickerProps, Input, InputNumber, Select, Upload } from "antd";
import dayjs from "dayjs";
import { filter, includes, map, toLower } from "lodash-es";
import React, { ReactNode, useState } from "react";
import { Dictionary } from "react-router-toolkit";
import MinusOutlined from "../assets/images/minus.svg";
import PlusOutlined from "../assets/images/plus.svg";
import UploadOutlined from "../assets/images/upload.svg";
import { IJSONInputProps } from "../components/monaco-editor/JSONInput";
import { IJSONInputWithSchemaProps, JSONSchemaInput } from "../components/monaco-editor/JSONSchemaInput";
import { dsc } from "../core/style/defaultStyleConfig";
import { flexAlignItemsCenterOpts } from "../core/style/utils";
import { Description, SchemaView } from "./SchemaView";
import { ParameterPositionIconComp } from "./config";
import { displayDefault, displayType, displayValidate, toEnumMap } from "./displayType";
import { isArraySchema, isObjectSchema, patchSchema } from "./patchSchema";
import { ISchema, TParameter } from "./type";

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
    <div style={{ fontSize: dsc.fontSize.xs }}>
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
        width: "100%",
        display: "flex",
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

enum TimeSymbolType {
  time = "time",
  date = "date",
  timeZH = "时间",
  dateZH = "日期",
}

function isTime(parameter: TParameter) {
  return (
    includes(toLower(parameter.name), TimeSymbolType.time) ||
    includes(toLower(parameter.name), TimeSymbolType.date) ||
    includes(parameter.description, TimeSymbolType.timeZH) ||
    includes(parameter.description, TimeSymbolType.dateZH)
  );
}

// PatchInput handle minimized schema
export function PatchInput({ schema, ...commonProps }: IJSONInputWithSchemaProps) {
  const isArray = isArraySchema(schema as any);
  const placeholder = displayType(schema) + displayValidate(schema) + displayDefault(schema);

  if (schema.enum) {
    const enumMap = toEnumMap(schema);

    return (
      <Select {...commonProps} allowClear placeholder={placeholder} options={enumToOptions(schema.enum, enumMap)} />
    );
  }

  if (schema.type === "boolean") {
    return (
      <Select
        {...commonProps}
        allowClear
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

  if (schema.type === "integer" || schema.type === "number") {
    return <InputNumber {...commonProps} css={{ width: "100%" }} placeholder={placeholder} min={0} />;
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
        <Button
          css={[
            flexAlignItemsCenterOpts(),
            {
              "&:hover img": {
                filter: "invert(30%) sepia(85%) saturate(2525%) hue-rotate(208deg) brightness(104%) contrast(101%)",
              },
            },
          ]}
        >
          <img src={UploadOutlined} style={{ marginRight: 6 }} alt="upload" />
          {placeholder || "Upload"}
        </Button>
      </Upload>
    );
  }

  return (
    <Input
      {...commonProps}
      allowClear
      onChange={(e) => commonProps.onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}

function ValueInput({ schema, ...commonProps }: IJSONInputWithSchemaProps) {
  const [value, setValue] = useState();

  const commit = () => {
    commonProps.onChange(value);
    setValue(undefined);
  };

  return (
    <>
      <span
        role="input"
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
          onChange={(nextValue) => {
            setValue(nextValue);
          }}
        />
      </span>
      <a role="btn" onClick={commit}>
        <img src={PlusOutlined} style={{ padding: "6px 4px" }} />
      </a>
    </>
  );
}

function EnumArrayInput({ schema, ...commonProps }: IJSONInputWithSchemaProps) {
  const placeholder = displayType(schema) + displayValidate(schema) + displayDefault(schema);
  const enumMap = toEnumMap(schema);

  return (
    <Select
      {...commonProps}
      mode="multiple"
      placeholder={placeholder}
      options={enumToOptions(schema.enum as string[], enumMap)}
      allowClear
    />
  );
}

function TimeInput({ schema, isUnix, ...commonProps }: IJSONInputWithSchemaProps & { isUnix?: boolean }) {
  const placeholder = displayType(schema) + displayValidate(schema) + displayDefault(schema);

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    commonProps.onChange(isUnix ? date?.unix() : dateString);
  };

  return (
    <DatePicker
      allowClear
      style={{ width: "100%" }}
      placeholder={placeholder}
      showTime={{
        showNow: true,
        defaultValue: dayjs("00:00:00", "HH:mm:ss"),
      }}
      value={commonProps.value ? (isUnix ? dayjs.unix(commonProps.value) : dayjs(commonProps.value)) : undefined}
      onChange={onChange}
    />
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
  const schema = patchSchema<ISchema>(parameter.schema || parameter, schemas);
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
        <JSONSchemaInput {...commonProps} schema={schema as any} />
      </FieldLabelWithSchemaWrap>
    );
  } else if (isArray) {
    const isEnumArray = !!schema.items?.enum;

    // if is multiple enums
    if (isEnumArray) {
      return (
        <FieldLabelWithSchemaWrap schema={schema} schemas={schemas} fieldLabel={fieldLabel} fieldDesc={fieldDesc}>
          <EnumArrayInput {...commonProps} schema={schema.items} />
        </FieldLabelWithSchemaWrap>
      );
    }

    return (
      <FieldLabelWithSchemaWrap schema={schema} schemas={schemas} fieldLabel={fieldLabel} fieldDesc={fieldDesc}>
        {map(commonProps.value, (value, index) => (
          <Row key={index}>
            <span role="input">
              <PatchInput
                {...commonProps}
                schema={schema.items}
                value={value}
                onChange={(nextValue) => {
                  commonProps.onChange(map(commonProps.value, (val, idx) => (index === idx ? nextValue : val)));
                }}
              />
            </span>
            <a
              role="btn"
              onClick={() => {
                commonProps.onChange(filter(commonProps.value, (_, idx) => index !== idx));
              }}
            >
              <img src={MinusOutlined} style={{ padding: "6px 4px" }} />
            </a>
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
  } else if (isTime(parameter)) {
    const type = (parameter?.schema as ISchema).type;
    const isUnix = type === "integer" || type === "number";

    return (
      <FieldLabelWithSchemaWrap schema={schema} schemas={schemas} fieldLabel={fieldLabel} fieldDesc={fieldDesc}>
        <TimeInput {...commonProps} schema={schema} isUnix={isUnix} />
      </FieldLabelWithSchemaWrap>
    );
  }

  return (
    <FieldLabelWithSchemaWrap schema={schema} schemas={schemas} fieldLabel={fieldLabel} fieldDesc={fieldDesc}>
      <PatchInput {...commonProps} schema={schema as any} />
    </FieldLabelWithSchemaWrap>
  );
};
