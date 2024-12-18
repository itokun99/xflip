import { atom } from "jotai";

// convert to rgba // default palettes
const RGBA_RAW_COLORS = {
  white: "#ffffff",
  black: "#000000",
  primary: "#8D31A8",
  secondary: "#B65AD0",
  secondary2: "#F3EAF6",
  danger: "#FF396F",
  success: "#1DCC70",
  info: "#05D0A4",
  warning: "#FFB400",
  gray: "#F4F4F5",
};

export type Palette = typeof RGBA_RAW_COLORS;

export const colorsAtom = atom(RGBA_RAW_COLORS);

export const rgba = (
  palette: Palette,
  name: keyof typeof RGBA_RAW_COLORS,
  alpha = 1,
) => {
  const hexColor = palette[name];
  const color = convertToRgbArray(hexColor);
  return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;
};

// Helper function to convert HEX to RGBA
export const hexToRgba = (hex: string, alpha: number = 1): string => {
  // Remove the hash symbol if present
  const cleanHex = hex.replace("#", "");

  // Convert 3-digit hex to 6-digit hex
  const fullHex =
    cleanHex.length === 3
      ? cleanHex
          .split("")
          .map(char => char + char)
          .join("")
      : cleanHex;

  // Extract the red, green, and blue components
  const r = parseInt(fullHex.substring(0, 2), 16);
  const g = parseInt(fullHex.substring(2, 4), 16);
  const b = parseInt(fullHex.substring(4, 6), 16);

  // Return the rgba string
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Helper function to convert HEX to RGBA
export const convertToRgbArray = (hex: string) => {
  // Remove the hash symbol if present
  const cleanHex = hex.replace("#", "");

  // Convert 3-digit hex to 6-digit hex
  const fullHex =
    cleanHex.length === 3
      ? cleanHex
          .split("")
          .map(char => char + char)
          .join("")
      : cleanHex;

  // Extract the red, green, and blue components
  const r = parseInt(fullHex.substring(0, 2), 16);
  const g = parseInt(fullHex.substring(2, 4), 16);
  const b = parseInt(fullHex.substring(4, 6), 16);

  // Return the rgba string
  return [r, g, b];
};
