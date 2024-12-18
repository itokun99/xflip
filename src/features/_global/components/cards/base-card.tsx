import { StyleSheet, View } from "react-native";
import { rounded, spacings } from "@core/styles";
import { useColors } from "@features/_global/hooks";
import React, { PropsWithChildren } from "react";

export interface BaseCardProps extends PropsWithChildren {}

export const BaseCard = React.memo((props: BaseCardProps) => {
  const colors = useColors();
  return (
    <View
      style={[
        styles.container,
        colors.bgWhiteAlpha100,
        { borderColor: colors.black(0.1) },
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
