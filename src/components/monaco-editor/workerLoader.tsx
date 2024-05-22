import { loader } from "@monaco-editor/react";
// import "monaco-editor/esm/vs/editor/editor.all.js";
import "monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestController.js";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker&inline";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker&inline";
import "monaco-editor/esm/vs/language/json/monaco.contribution";

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === "json") {
      return new jsonWorker();
    }

    return new editorWorker();
  },
};

loader.config({ monaco });
// loader.init().then();
