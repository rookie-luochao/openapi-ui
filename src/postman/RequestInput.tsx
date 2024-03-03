import { IJSONInputProps, JSONInput } from "../components/monaco-editor/JSONInput";

export const RequestHeaderInput = (props: Partial<IJSONInputProps>) => {
  const commonProps = {
    value: props.value || {},
    onChange: props.onChange ? props.onChange : () => undefined,
  };

  return <JSONInput {...commonProps} height={400} />;
};

export const RequestParameterInput = (props: Partial<IJSONInputProps>) => {
  const commonProps = {
    value: props.value || {},
    onChange: props.onChange ? props.onChange : () => undefined,
  };

  return <JSONInput {...commonProps} height={400} />;
};

export const RequestBodyInput = (props: Partial<IJSONInputProps>) => {
  const commonProps = {
    value: props.value || {},
    onChange: props.onChange ? props.onChange : () => undefined,
  };

  return <JSONInput {...commonProps} height={400} />;
};
