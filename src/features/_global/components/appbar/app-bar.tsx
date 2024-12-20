import React from "react";
import { P, SvgIcon, useColors } from "@features/_global";
import { Pressable, StyleSheet, View, useNavigation } from "@core/packages";
import { appStyles, spacings } from "@core/styles";
// import TurboImage from "react-native-turbo-image";
// import { Avatar } from "../avatar";
import { routeNames } from "@features/_root/utils";

export interface AppBarProps {
  title?: string;
  backButton?: boolean;
  onPressBackOveride?: () => void;
  onPressBack?: () => void;
}

export const AppBar = React.memo(
  ({ backButton = true, ...props }: AppBarProps) => {
    const colors = useColors();
    const navigation = useNavigation();

    const containerStyle = React.useMemo(
      () =>
        StyleSheet.flatten([
          {
            backgroundColor: colors.white(1),
            borderBottomColor: colors.black(0.1),
          },
          styles.container,
        ]),
      [colors],
    );

    const handlePressBack = () => {
      if (props.onPressBackOveride) return props.onPressBackOveride();

      if (navigation.canGoBack()) {
        navigation.goBack();
      } else {
        navigation.reset(routeNames.dashboard as never);
      }
    };

    return (
      <View style={containerStyle}>
        {backButton && (
          <Pressable onPress={handlePressBack} style={styles.cta}>
            <SvgIcon name="ChevronLeft" size={24} color={colors.primary(1)} />
          </Pressable>
        )}

        <View style={styles.content}>
          <P size="lg">{props.title}</P>
        </View>
      </View>
    );
  },
);

AppBar.displayName = "AppBar";

const styles = StyleSheet.create({
  container: {
    ...appStyles.flexRow,
    ...appStyles.gsm,
    ...appStyles.pvxs,
    ...appStyles.phsm,
    borderBottomWidth: 1,
  },
  cta: {
    height: 32,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  content: StyleSheet.flatten([appStyles.flex1, { justifyContent: "center" }]),
});
