import { Editor } from "json-schema-enhanced-editor-react";
import { IJSONInputProps } from "../monaco-editor/JSONInput";

export function JSONInput(props: IJSONInputProps & { height?: string }) {
  const value = props.value ? JSON.stringify(props.value, null, 4) : "{}";

  return (
    <Editor
      height={props.height || "300px"}
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
