export enum ThemeType {
  light = "light",
  dark = "dark",
}

export type IThemeType = keyof typeof ThemeType;
