import { useMemo } from "react";
import { useColors } from "./use-color";
import { appStyles, rounded, spacings } from "@core/styles";
import { StyleSheet } from "react-native";

export type StyleCallback<T extends StyleSheet.NamedStyles<T>> = (utils: {
  colors: ReturnType<typeof useColors>;
  spacings: typeof spacings;
  appStyles: typeof appStyles;
  rounded: typeof rounded;
}) => T;

export const useStyles = <T extends StyleSheet.NamedStyles<T>>(
  styleInput: StyleCallback<T> | T,
): T => {
  const colors = useColors();

  const styleMemo = useMemo(() => {
    if (typeof styleInput === "function") {
      const rawStyles = styleInput({ colors, spacings, appStyles, rounded });
      return StyleSheet.create(rawStyles);
    }
    return StyleSheet.create(styleInput);
  }, [colors, spacings, appStyles, styleInput, rounded]);

  return styleMemo;
};
