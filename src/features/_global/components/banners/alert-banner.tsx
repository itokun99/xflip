import { StyleSheet, View } from "react-native";
import { appStyles, fontSizes, getFontFamily } from "@core/styles";
import React from "react";
import { P } from "../text";
import { Button } from "react-native-paper";
import { useColors } from "@features/_global/hooks";

export interface AlertBannerProps {
  text?: React.ReactNode;
  button?: {
    title?: string;
    onPress?: () => void;
  };
  link?: {
    title?: string;
    onPress?: () => void;
  };
}

export const AlertBanner = React.memo((props: AlertBannerProps) => {
  const colors = useColors();
  return (
    <View style={[styles.container, colors.bgPrimaryAlpha10]}>
      <View style={styles.body}>
        {props.text ? (
          typeof props.text === "string" ? (
            <P size="xs" style={{ color: colors.black(0.7) }}>
              {props.text}
            </P>
          ) : (
            props.text
          )
        ) : null}
      </View>
      <View style={styles.footer}>
        {props.link && (
          <Button
            mode="text"
            contentStyle={{
              paddingLeft: 0,
            }}
            textColor={colors.primary(1)}
            labelStyle={{
              marginLeft: 0,
              fontSize: fontSizes.xs,
              fontFamily: getFontFamily("primary", "normal", "normal"),
            }}
            onPress={props.link?.onPress}>
            {props.link?.title || "No Title"}
          </Button>
        )}
        {props.button && (
          <Button
            buttonColor={colors.primary(1)}
            mode="contained"
            labelStyle={{
              fontSize: fontSizes.xs,
              fontFamily: getFontFamily("primary", "normal", "normal"),
            }}
            onPress={props.button?.onPress}>
            {props.button?.title || "No Title"}
          </Button>
        )}
      </View>
    </View>
  );
});

AlertBanner.displayName = "AlertBanner";

const styles = StyleSheet.create({
  container: StyleSheet.flatten([
    appStyles.overflowHidden,
    appStyles.relative,
    appStyles.pmd,
    appStyles.roundedlg,
  ]),
  body: StyleSheet.flatten([appStyles.mbsm]),
  footer: StyleSheet.flatten([appStyles.flexRow, appStyles.justifyBetween]),
});
