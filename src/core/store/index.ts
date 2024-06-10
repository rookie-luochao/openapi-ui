import { create } from "zustand";
import { StorageValue, createJSONStorage, devtools, persist } from "zustand/middleware";

import { IImportModeType } from "@/pages/login/common/config";
import { IOpenAPI, IOperationEnhanceMap } from "@/type";

import { IThemeType } from "../style/themeConfig";
import { logger } from "./loggerMiddleware";

export interface IConfigInfo {
  timeout?: number;
  authorization?: string;
  theme?: IThemeType;
}

interface IConfigInfoState {
  configInfo: IConfigInfo | null | undefined;
  updateConfigInfo: (nextState: IConfigInfo) => void;
  clear: () => void;
}

export const configInfoStorageKey = "config-info-storage";
export const defaultConfigInfoStorage = { state: { configInfo: null }, version: 0 };
export type IConfigInfoStorageState = StorageValue<Pick<IConfigInfoState, "configInfo">>;

export const useConfigInfoStore = create<IConfigInfoState>()(
  logger(
    devtools(
      persist(
        (set) => ({
          configInfo: null,
          updateConfigInfo: (newInfo) => set(() => ({ configInfo: newInfo })),
          clear: () => set(() => ({ configInfo: null })),
        }),
        {
          name: configInfoStorageKey,
          storage: createJSONStorage(() => sessionStorage),
        },
      ),
    ),
  ),
);

export interface IOpenapiWithServiceInfo {
  serviceURL: string;
  openapi: IOpenAPI;
  operations?: IOperationEnhanceMap;
  importModeType: IImportModeType;
}

interface IOpenapiWithServiceInfoState {
  openapiWithServiceInfo: IOpenapiWithServiceInfo | null | undefined;
  updateOpenapiWithServiceInfo: (nextState: IOpenapiWithServiceInfo) => void;
  clear: () => void;
}

export const openapiWithServiceInfoStorageKey = "openapi-with-service-info-storage";

export const useOpenapiWithServiceInfoStore = create<IOpenapiWithServiceInfoState>()(
  logger(
    devtools(
      persist(
        (set) => ({
          openapiWithServiceInfo: null,
          updateOpenapiWithServiceInfo: (newInfo) => set(() => ({ openapiWithServiceInfo: newInfo })),
          clear: () => set(() => ({ openapiWithServiceInfo: null })),
        }),
        {
          name: openapiWithServiceInfoStorageKey,
          storage: createJSONStorage(() => sessionStorage),
        },
      ),
    ),
  ),
);
