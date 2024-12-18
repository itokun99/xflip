import { appStyles } from "@core/styles";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useColors } from "@features/_global/hooks";

export const TopSection = React.memo(() => {
  const colors = useColors();

  return (
    <View style={styles.container}>
      <View style={[styles.overlay, { backgroundColor: colors.primary(1) }]} />
    </View>
  );
});

TopSection.displayName = "TopSection";

const styles = StyleSheet.create({
  container: StyleSheet.flatten([
    appStyles.relative,
    appStyles.phmd,
    appStyles.mblg,
  ]),
  overlay: {
    height: 140,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
});
