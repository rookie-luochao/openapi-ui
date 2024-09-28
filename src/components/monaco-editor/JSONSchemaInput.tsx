import { Editor } from "@monaco-editor/react";
import { isObject } from "lodash-es";

import { ISchema } from "@/type";

import { IJSONInputProps } from "./JSONInput";
import "./workerLoader";

export type IJSONInputWithSchemaProps = { schema: ISchema } & IJSONInputProps;

export function JSONSchemaInput(props: IJSONInputWithSchemaProps) {
  const value = props.value ? (isObject(props.value) ? JSON.stringify(props.value, null, 4) : props.value) : "{}";

  return (
    <Editor
      defaultLanguage="json"
      height="300px"
      theme="vs-dark"
      value={value}
      onChange={(value) => {
        props.onChange(value || null);
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
