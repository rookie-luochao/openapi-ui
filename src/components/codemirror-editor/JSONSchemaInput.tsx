import { Editor } from "json-schema-enhanced-editor-react";
import { IJSONInputWithSchemaProps } from "../monaco-editor/JSONSchemaInput";

export function JSONSchemaInput(props: IJSONInputWithSchemaProps & { height?: string }) {
  const value = props.value ? JSON.stringify(props.value, null, 4) : "{}";

  return (
    <Editor
      height={props.height || "300px"}
      schema={props.schema as any}
      value={value}
      onChange={(value) => {
        if (!value) return props.onChange(null);

        try {
          const result = JSON.parse(value);

          if (result) {
            props.onChange(result);
          }
        } catch (e) {
          // _
        }
      }}
    />
  );
}
