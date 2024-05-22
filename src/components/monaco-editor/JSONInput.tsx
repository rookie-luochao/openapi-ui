import { Editor } from "@monaco-editor/react";
// import "./workerLoader";

export interface IJSONInputProps {
  value: any;
  onChange: (value: any) => void;
}

export function JSONInput(props: IJSONInputProps & { height?: number }) {
  const value = props.value ? JSON.stringify(props.value, null, 4) : "{}";

  return (
    <Editor
      height={props.height || 300}
      theme="vs-dark"
      defaultLanguage="json"
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
          });
        } catch (e) {
          console.log("set monaco schema failed: ", e);
        }
      }}
    />
  );
}
