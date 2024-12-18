import React from "react";
import { StyleProp, View, ViewStyle, StyleSheet } from "react-native";
import { Icon } from "./icon";
import { P } from "@features/_global";
import { useColors } from "@features/_global/hooks";
import { appStyles } from "@core/styles";
import { APP_CONFIG } from "@core/configs";

export interface BrandLogoProps {
  containerStyle?: StyleProp<ViewStyle>;
  mode?: "dark" | "light";
}

export const BrandLogo = React.memo(
  ({ mode = "dark", ...props }: BrandLogoProps) => {
    const containerStyle = StyleSheet.flatten([
      appStyles.flexRow,
      appStyles.alignCenter,
      appStyles.gsm,
      props.containerStyle,
    ]);
    const colors = useColors();
    return (
      <View style={containerStyle}>
        <Icon image="img-logo" size={32} style={[appStyles.roundedFull]} />
        <P
          size="xl"
          style={[
            mode === "dark"
              ? colors.textWhiteAlpha100
              : colors.textPrimaryAlpha100,
          ]}>
          {APP_CONFIG.brandName}
        </P>
      </View>
    );
  },
);
