import React from "react";
import TurboImage, { TurboImageProps } from "react-native-turbo-image";
import { ImageStyle, StyleProp, StyleSheet } from "react-native";

export interface ImageIconProps {
  src?: string;
  source?: TurboImageProps["source"];
  format?: TurboImageProps["format"];
  style?: StyleProp<ImageStyle>;
}
export const ImageIcon = React.memo(
  ({ src, format = "svg", ...props }: ImageIconProps) => {
    return (
      <TurboImage
        source={props.source || { uri: String(src) }}
        style={StyleSheet.flatten([styles.wrapper, props.style])}
        format={format}
      />
    );
  },
);

ImageIcon.displayName = "ImageIcon";

const styles = StyleSheet.create({
  wrapper: { width: 28, height: 28 },
});
