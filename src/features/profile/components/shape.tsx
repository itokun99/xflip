import { StyleSheet, View } from "react-native";
import { appStyles } from "@core/styles";
import { useColors } from "@features/_global/hooks";
import React from "react";

export const Shape = React.memo(() => {
  const colors = useColors();

  return (
    <View style={styles.container}>
      {[1, 2].map(i => {
        return (
          <View
            key={i}
            style={StyleSheet.flatten([styles.shape, colors.bgPrimaryAlpha100])}
          />
        );
      })}
    </View>
  );
});

const styles = StyleSheet.create({
  container: StyleSheet.flatten([
    appStyles.glg,
    {
      position: "absolute",
      top: -40,
      right: -100,
      transform: [{ rotate: "-60deg" }],
    },
  ]),
  shape: StyleSheet.flatten([
    { height: 56, width: 250 },
    appStyles.roundedFull,
  ]),
});
