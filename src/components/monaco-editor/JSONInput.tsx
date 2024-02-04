import { Editor } from "@monaco-editor/react";
import { ISchema } from "../../openapi/type";
import "./workerLoader";

export interface IJSONInputProps {
  value: any;
  onChange: (value: any) => void;
}

export type IJSONInputWithSchemaProps = { schema: ISchema } & IJSONInputProps;

export function JSONInput(props: IJSONInputWithSchemaProps) {
  const value = props.value ? JSON.stringify(props.value, null, 2) : "";

  return (
    <Editor
      height="300px"
      theme="vs-dark"
      defaultLanguage="json"
      value={value}
      onChange={(value) => {
        if (!value) return;

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
