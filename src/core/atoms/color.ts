import { atom } from "@core/packages";

// convert to rgba // default palettes
export const RGBA_RAW_COLORS = {
  white: "#ffffff",
  black: "#000000",
  primary: "#A294F9",
  secondary: "#CDC1FF",
  secondary2: "#F3EAF6",
  danger: "#FF396F",
  success: "#1DCC70",
  info: "#05D0A4",
  warning: "#FFB400",
  gray: "#F4F4F5",
};

export const colorsAtom = atom(RGBA_RAW_COLORS);
