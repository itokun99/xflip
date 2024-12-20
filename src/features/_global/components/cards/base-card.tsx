import { StyleProp, StyleSheet, View, ViewStyle } from "@core/packages";
import { rounded, spacings } from "@core/styles";
import { useColors } from "@features/_global";
import React, { PropsWithChildren } from "react";

export interface BaseCardProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const BaseCard = React.memo((props: BaseCardProps) => {
  const colors = useColors();
  return (
    <View
      style={[
        styles.container,
        colors.bgWhiteAlpha100,
        { borderColor: colors.black(0.1) },
        props.style,
      ]}>
      {props.children}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: spacings.sm,
    borderRadius: rounded.md,
    borderWidth: 1,
    overflow: "hidden",
    position: "relative",
  },
});
