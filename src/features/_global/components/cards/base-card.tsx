import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "@core/packages";
import { rounded, spacings } from "@core/styles";
import { useColors } from "@features/_global";
import React, { PropsWithChildren, useMemo } from "react";
import { Pressable } from "react-native-gesture-handler";

export interface BaseCardProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const BaseCard = React.memo((props: BaseCardProps) => {
  const colors = useColors();
  const Wrapper = useMemo(
    () => (typeof props.onPress === "function" ? TouchableOpacity : View),
    [props.onPress],
  );

  const wrapperStyle = useMemo(
    () =>
      StyleSheet.flatten([
        {
          borderTopColor: colors.black(0.1),
          borderLeftColor: colors.black(0.1),
          borderRightColor: colors.black(0.1),
          borderBottomColor: colors.black(0.1),
        },
        styles.container,
        colors.bgWhiteAlpha100,
        props.style,
      ]),
    [colors, props.style],
  );

  return (
    <Wrapper onPress={props.onPress} style={wrapperStyle}>
      {props.children}
    </Wrapper>
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
