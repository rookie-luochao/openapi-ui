import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: [["@babel/preset-react", { runtime: "automatic", importSource: "@emotion/react" }]],
        plugins: ["@emotion/babel-plugin"],
        babelrc: false,
        configFile: false,
      },
    }),
  ],
  resolve: {
    alias: {
      "@request": "../core/http/index.ts",
    },
  },
});
