import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  plugins: [
    react({
      babel: {
        presets: [["@babel/preset-react", { runtime: "automatic", importSource: "@emotion/react" }]],
        plugins: ["@emotion/babel-plugin"],
        babelrc: false,
        configFile: false,
      },
    }),
    cssInjectedByJsPlugin(),
  ],
  resolve: {
    alias: {
      "@request": resolve(__dirname, "./src/core/http/index.ts"),
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
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "openApiUI",
    },
    rollupOptions: {
      output: [
        {
          name: "es build",
          format: "es",
          entryFileNames: () => {
            return "openapi-ui.js";
          },
          chunkFileNames: () => {
            return "[name].js";
          },
          dir: resolve(__dirname, "es"),
          // sourcemap: true,
        },
        {
          name: "umd build",
          format: "umd",
          entryFileNames: () => {
            return "openapi-ui.umd.js";
          },
          dir: resolve(__dirname, "lib"),
          // sourcemap: true,
        },
      ],
    },
  },
  esbuild: {
    drop: ["console", "debugger"],
  },
});
