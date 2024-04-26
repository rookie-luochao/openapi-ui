/*
 * 样式基本配置
 */
export const dsc = {
  // 字体
  fontFamily: {
    mono: `"Menlo", "Liberation Mono", "Consolas", "DejaVu Sans Mono", "Ubuntu Mono", "Courier New", "andale mono", "lucida console", monospace`,
  },
  // 字体大小
  fontSize: {
    xxs: 10,
    xs: 12,
    s: 14,
    normal: 16,
    m: 20,
    l: 24,
    xl: 30,
    xxl: 38,
  },
  // 层级
  zIndex: {
    low: 10,
    mid: 100,
    high: 300,
    higher: 500,
    higherPlus: 1000,
  },
  // 间距
  spacing: {
    base: "0.6em 1em",
  },
  color: {
    primary: "#1677ff",
    primaryLight: "rgb(22, 119, 255, 0.2)",

    success: "#23CBA0",
    warning: "#F1911E",
    info: "#A9AEFC",
    danger: "#E51D30",

    text: "#333",

    bg: "#FFFFFF",
    bgGray: "#f0f2f5",

    border: "#DEE2EC",

    menuText: "#333",

    hover: "#1677FFCC",

    menuGroup: "#FFFFFF",
    menuGroupBg: "#1677FF99",
  },
};

export type ITheme = typeof lightTheme;

export const lightTheme = {
  color: {
    primary: "#1677FF",
    primaryLight: "#1677FF33",

    success: "#23CBA0",
    warning: "#F1911E",
    info: "#A9AEFC",
    danger: "#E51D30",

    text: "#333333",
    textLight: "#33333399", // text * 0.6
    bg: "#FFFFFF",
    bgGray: "#F0F2F5",

    border: "#DEE2EC",

    menuGroup: "#FFFFFF",
    menuGroupBg: "#1677FF99",
    menuItem: "#333333",

    descCardBg: "#FFFFFF",

    title: "#333333", // black
  },
};

export const darkTheme = {
  color: {
    primary: "#3EA6FF",
    primaryLight: "#272727",

    success: "#23CBA0",
    warning: "#F1911E",
    info: "#A9AEFC",
    danger: "#E51D30",

    text: "#FFFFFF",
    textLight: "#FFFFFF9E", // white * 0.62
    bg: "#0F0F0F",
    bgGray: "#1A1A1A",

    border: "#FFFFFF19",

    menuGroup: "#FFFFFFDB", // white * 0.86
    menuGroupBg: "#0F0F0F",
    menuItem: "#FFFFFF9E", // white * 0.62

    descCardBg: "#272727",

    title: "#FFFFFFDB", // white * 0.86
  },
};
