import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      babel: {
        presets: [["@babel/preset-react", { runtime: "automatic", importSource: "@emotion/react" }]],
        plugins: ["@emotion/babel-plugin"],
        babelrc: false,
        configFile: false,
      },
    }),
    visualizer(),
  ],
  resolve: {
    alias: {
      "@request": resolve(__dirname, "src/core/http/index.ts"),
      "@": resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis",
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: false,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
  esbuild: {
    drop: mode === "development" ? [] : ["console", "debugger"],
  },
}));
