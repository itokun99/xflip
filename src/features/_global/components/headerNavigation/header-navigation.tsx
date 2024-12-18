import React from "react";
import { appStyles, spacings } from "@core/styles";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { BaseTextProps, P } from "@features/_global/components";
import { Icon } from "@rneui/themed";

type HeaderNavigationProps = {
  title?: string;
  buttonText?: string;
  iconButtonMore?: string;
  fontSize?: string;
  textColor?: string;
  typeIcon?: string;
  onPress?: () => void;
};

export const HeaderNavigation = React.memo((props: HeaderNavigationProps) => {
  return (
    <View style={styles.container}>
      <P bold size={(props.fontSize as BaseTextProps["size"]) || "xxl"}>
        {props.title}
      </P>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <P regular size="xs" style={{ color: props.textColor || "#C2BEDB" }}>
          {props.buttonText}
        </P>
        <Icon
          name={props.iconButtonMore || ""}
          type={props.typeIcon || "font-awesome-5"}
          size={10}
          color="#DAD8F4"
        />
      </TouchableOpacity>
    </View>
  );
});

HeaderNavigation.displayName = "HeaderNavigation";

const styles = StyleSheet.create({
  container: {
    ...appStyles.flexRow,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  button: {
    ...appStyles.flexRow,
    alignItems: "center",
    gap: spacings.xs,
  },
});
