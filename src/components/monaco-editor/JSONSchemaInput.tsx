import { Editor } from "@monaco-editor/react";

import { ISchema } from "../../openapi/type";
import { IJSONInputProps } from "./JSONInput";
import "./workerLoader";

export type IJSONInputWithSchemaProps = { schema: ISchema } & IJSONInputProps;

export function JSONSchemaInput(props: IJSONInputWithSchemaProps) {
  const value = props.value ? JSON.stringify(props.value, null, 4) : "{}";

  return (
    <Editor
      defaultLanguage="json"
      height="300px"
      theme="vs-dark"
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
      onMount={(_, monaco) => {
        try {
          monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
            validate: true,
            schemas: [
              {
                uri: "https://json.schemastore.org/schema",
                fileMatch: ["*"],
                schema: props.schema,
              },
            ],
          });
        } catch (e) {
          console.log("set monaco schema failed: ", e);
        }
      }}
    />
  );
}
