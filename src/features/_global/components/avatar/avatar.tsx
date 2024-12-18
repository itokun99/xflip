import { rounded } from "@core/styles";
import { useColors } from "@features/_global/hooks";
import React from "react";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import TurboImage from "react-native-turbo-image";

export interface AvatarProps {
  src?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

export const Avatar = React.memo(({ src, size = 28, style }: AvatarProps) => {
  const colors = useColors();

  return (
    <Pressable
      style={[
        styles.wrapper,
        { width: size, height: size, backgroundColor: colors.primary(1) },
        style,
      ]}>
      {src && <TurboImage source={{ uri: src }} style={styles.image} />}
    </Pressable>
  );
});

Avatar.displayName = "Avatar";

const styles = StyleSheet.create({
  wrapper: {
    overflow: "hidden",
    borderRadius: rounded.full,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
});
