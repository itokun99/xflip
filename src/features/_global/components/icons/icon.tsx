import React from "react";
import { StyleProp, StyleSheet, Image } from "react-native";
import { IMAGES, ImageNames } from "@core/assets";
import { ImageStyle } from "react-native/types";

export interface IconProps {
  image: ImageNames;
  size?: number;
  style?: StyleProp<ImageStyle>;
}

export const Icon = React.memo((props: IconProps) => {
  const img = IMAGES[props.image];

  const baseStyle = StyleSheet.flatten([
    props.size ? { width: Number(props.size), height: Number(props.size) } : {},
    props.style,
  ]);

  if (!img) return null;

  return <Image source={img} style={baseStyle} />;
});

Icon.displayName = "Icon";
