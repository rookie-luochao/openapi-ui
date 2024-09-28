import { Editor } from "@monaco-editor/react";
import { isObject } from "lodash-es";

import "./workerLoader";

export interface IJSONInputProps {
  value: any;
  onChange: (value: any) => void;
}

export function JSONInput(props: IJSONInputProps & { height?: number | string }) {
  const value = props.value ? (isObject(props.value) ? JSON.stringify(props.value, null, 4) : props.value) : "{}";

  return (
    <Editor
      defaultLanguage="json"
      height={props.height || 300}
      theme="vs-dark"
      value={value}
      onChange={(value) => {
        props.onChange(value || null);
      }}
      onMount={(_, monaco) => {
        try {
          monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
            validate: true,
          });
        } catch (e) {
          console.log("set monaco schema failed: ", e);
        }
      }}
    />
  );
}
