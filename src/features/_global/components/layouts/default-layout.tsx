import { appStyles } from "@core/styles";
import { AppBar, SearchAppBar, useColors } from "@features/_global";
import React, { PropsWithChildren } from "react";
import {
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "@core/packages";

export interface DefaultLayoutProps extends PropsWithChildren {
  bgMode?: "light" | "dark" | "none" | "gray" | "primary";
  containerStyle?: StyleProp<ViewStyle>;
  refreshing?: boolean;
  onRefresh?: () => void;
  scrolling?: boolean;
  title?: string;
}

export const DefaultLayout = React.memo(
  ({ children, scrolling = true, ...props }: DefaultLayoutProps) => {
    const colors = useColors();

    const getBg = () => {
      switch (props.bgMode) {
        case "gray":
          return colors.bgGrayAlpha100;
        case "light":
          return colors.bgWhiteAlpha100;
        case "dark":
          return colors.bgBlackAlpha80;
        case "none":
          return {};
        case "primary":
          return colors.bgPrimaryAlpha100;
      }
    };

    const baseContainerStyle = StyleSheet.flatten([appStyles.flex1, getBg()]);

    return (
      <View style={baseContainerStyle}>
        <StatusBar
          barStyle={props.bgMode === "light" ? "dark-content" : "light-content"}
          backgroundColor={
            props.bgMode === "light" ? colors.white(1) : colors.primary()
          }
        />
        <AppBar title={props.title} />
        {scrolling ? (
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={Boolean(props.refreshing)}
                onRefresh={props.onRefresh}
              />
            }
            contentContainerStyle={[appStyles.pbxxxl, props.containerStyle]}>
            {children}
          </ScrollView>
        ) : (
          <View style={[appStyles.flex1, props.containerStyle]}>
            {children}
          </View>
        )}
      </View>
    );
  },
);

DefaultLayout.displayName = "DefaultLayout";
