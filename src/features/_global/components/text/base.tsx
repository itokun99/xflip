import { appStyles, fontSizes, getFontFamily } from "@core/styles";
import { useColors } from "@features/_global/hooks";
import React from "react";
import { StyleSheet, Text as RNText, TextProps, StyleProp } from "react-native";

export interface BaseTextProps extends TextProps {
  bold?: boolean;
  // semibold?: boolean;
  normal?: boolean;
  regular?: boolean;
  center?: boolean;
  italic?: boolean;
  mono?: boolean;
  fontWeight?: "regular" | "medium" | "bold";
  size?: "xxxs" | "xxs" | "xs" | "sm" | "base" | "lg" | "xl" | "xxl" | "xxxl";
}

export const BaseText = React.memo(
  React.forwardRef<RNText, BaseTextProps>((props, ref) => {
    const colors = useColors();
    // Tentukan fontWeight berdasarkan props
    let fontWeightStyle = "";

    if (props.bold) {
      fontWeightStyle = "bold";
    } else if (props.normal || props.regular) {
      fontWeightStyle = "normal";
    } else if (props.fontWeight) {
      const fontWeightMapping: { [key: string]: any } = {
        regular: "normal",
        medium: "medium",
        bold: "bold",
      };
      fontWeightStyle = fontWeightMapping[props.fontWeight];
    }

    const fontSize = fontSizes[props.size || "base"];

    return (
      <RNText
        ref={ref}
        {...props}
        style={StyleSheet.flatten([
          styles.defaultStyle,
          fontWeightStyle || props.italic || props.mono
            ? {
                fontFamily: getFontFamily(
                  props.mono ? "mono" : "primary",
                  props.italic ? "italic" : "normal",
                  (fontWeightStyle as any) || "normal",
                ),
              }
            : {},
          { fontSize },
          props.center ? { textAlign: "center" } : {},
          colors.textBlackAlpha100,
          props.style,
        ])}>
        {props.children}
      </RNText>
    );
  }),
);

BaseText.displayName = "BaseText";

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: getFontFamily("primary", "normal", "normal"),
    fontSize: fontSizes.base,
  },
});
