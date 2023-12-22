/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_appName: string;
  readonly VITE_baseURL: string;
  readonly VITE_env?: string;
  readonly VITE_version?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
