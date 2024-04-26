import { useTheme } from "@emotion/react";
import { Button, DatePicker, DatePickerProps, Input, InputNumber, Select, Upload } from "antd";
import dayjs from "dayjs";
import { filter, includes, map, toLower } from "lodash-es";
import React, { ReactNode, useState } from "react";
import { Dictionary } from "react-router-toolkit";
import { MinusOutlined, PlusOutlined, UploadOutlined } from "../components/icon";
import { IJSONInputProps } from "../components/monaco-editor/JSONInput";
import { IJSONInputWithSchemaProps, JSONSchemaInput } from "../components/monaco-editor/JSONSchemaInput";
import { ITheme, dsc } from "../core/style/defaultStyleConfig";
import { flexAlignItemsCenterOpts } from "../core/style/utils";
import { Description, SchemaView } from "./SchemaView";
import { ParameterPositionIconComp } from "./config";
import { displayDefault, displayType, displayValidate, toEnumMap } from "./displayType";
import { isArraySchema, isObjectSchema, patchSchema } from "./patchSchema";
import { ISchema, TParameter } from "./type";

function LabelStyleWrap({ children, required }: { required?: boolean; children?: React.ReactNode }) {
  const theme = useTheme() as ITheme;

  return (
    <div
      css={
        required
          ? {
              position: "relative",
              fontWeight: "bold",
              color: theme.color.title,
              "&:after": {
                content: `"*"`,
                color: theme.color.danger,
                position: "absolute",
                top: "15%",
                marginLeft: 1,
              },
            }
          : {
              color: theme.color.title,
            }
      }
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
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
          {fieldLabel}
          {fieldDesc}
        </div>
        <div>{children}</div>
      </div>
      {schema && (isObjectSchema(schema) || isArraySchema(schema)) && <SchemaView schema={schema} schemas={schemas} />}
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
          cursor: "pointer",
          opacity: 0.6,
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
  const theme = useTheme() as ITheme;
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
    return (
      <InputNumber
        {...commonProps}
        style={{ width: "100%" }}
        placeholder={placeholder}
        min={0}
        changeOnWheel={false}
        controls={false}
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
        <Button
          css={[
            flexAlignItemsCenterOpts(),
            {
              "&:hover path": {
                fill: theme.color.primary,
              },
            },
          ]}
          icon={<UploadOutlined fill={theme.color.menuItem} />}
        >
          {placeholder || "Upload"}
        </Button>
      </Upload>
    );
  }

  return (
    <Input
      {...commonProps}
      allowClear
      placeholder={placeholder}
      onChange={(e) => commonProps.onChange(e.target.value)}
    />
  );
}

function ValueInput({ schema, ...commonProps }: IJSONInputWithSchemaProps) {
  const theme = useTheme() as ITheme;
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
        <PlusOutlined fill={theme.color.text} />
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
      allowClear
      mode="multiple"
      placeholder={placeholder}
      options={enumToOptions(schema.enum as string[], enumMap)}
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
  const theme = useTheme() as ITheme;
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

  const fieldDesc = <Description desc={parameter.description || schema.description || ""} ishighLightDesc />;

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
              <MinusOutlined fill={theme.color.text} />
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
