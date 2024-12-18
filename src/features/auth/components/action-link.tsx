import { StyleSheet, View } from "react-native";
import { appStyles } from "@core/styles";
import { P } from "@features/_global";
import { useColors } from "@features/_global/hooks";
import React from "react";
import { Button } from "react-native-paper";

interface Cta {
  text: string;
  onPress: () => void;
}

export interface ActionLinkProps {
  ctas: Cta[];
}

export const ActionLink = React.memo((props: ActionLinkProps) => {
  const colors = useColors();
  return (
    <View
      style={
        props.ctas?.length === 1 ? styles.containerSingle : styles.container
      }>
      {props.ctas?.map((cta, i) => {
        return (
          <Button key={i} mode="text" onPress={cta?.onPress}>
            <P size="sm" style={[colors.textPrimaryAlpha100]}>
              {cta.text}
            </P>
          </Button>
        );
      })}
    </View>
  );
});

const styles = StyleSheet.create({
  container: StyleSheet.flatten([
    appStyles.absolute,
    appStyles.bottomZero,
    appStyles.rightZero,
    appStyles.leftZero,
    appStyles.flexRow,
    appStyles.justifyBetween,
    appStyles.pvlg,
    appStyles.phmd,
  ]),
  containerSingle: StyleSheet.flatten([
    appStyles.flexRow,
    appStyles.justifyCenter,
    appStyles.pvlg,
    appStyles.phmd,
  ]),
});
