import { atom } from "@core/packages";

// convert to rgba // default palettes
export const RGBA_RAW_COLORS = {
  white: "#ffffff",
  black: "#000000",
  primary: "#A294F9",
  secondary: "#CDC1FF",
  secondary2: "#F3EAF6",
  danger: "#FF396F",
  success: "#86C8BC",
  info: "#7BD3EA",
  warning: "#FFDBAA",
  gray: "#F4F4F5",
};

export const colorsAtom = atom(RGBA_RAW_COLORS);
