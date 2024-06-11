import { Radio } from "antd";

import { JSONInput } from "@/components/codemirror-editor/JSONInput";
import { IJSONInputProps } from "@/components/monaco-editor/JSONInput";

export const RequestHeaderInput = (props: Partial<IJSONInputProps>) => {
  const commonProps = {
    value: props.value || {},
    onChange: props.onChange ? props.onChange : () => undefined,
  };

  return (
    <div>
      <JSONInput {...commonProps} height="400px" />
      <Radio.Group
        style={{ marginTop: 10 }}
        value={commonProps.value["Content-Type"] || ""}
        onChange={(e) => commonProps.onChange(Object.assign({}, commonProps.value, { "Content-Type": e.target.value }))}
      >
        <Radio value="">none</Radio>
        <Radio value="application/json">json</Radio>
        <Radio value="multipart/form-data">form-data</Radio>
        <Radio value="application/x-www-form-urlencoded">x-www-form-urlencoded</Radio>
      </Radio.Group>
    </div>
  );
};

export const RequestParameterInput = (props: Partial<IJSONInputProps>) => {
  const commonProps = {
    value: props.value || {},
    onChange: props.onChange ? props.onChange : () => undefined,
  };

  return <JSONInput {...commonProps} height="400px" />;
};

export const RequestBodyInput = (props: Partial<IJSONInputProps>) => {
  const commonProps = {
    value: props.value || {},
    onChange: props.onChange ? props.onChange : () => undefined,
  };

  return <JSONInput {...commonProps} height="400px" />;
};
