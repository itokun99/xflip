import { appStyles } from "@core/styles";
import { SearchAppBar, useColors } from "@features/_global";
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

export interface DashboardLayoutProps extends PropsWithChildren {
  bgMode?: "light" | "dark" | "none" | "gray" | "primary";
  containerStyle?: StyleProp<ViewStyle>;
  refreshing?: boolean;
  onRefresh?: () => void;
}

export const DashboardLayout = React.memo(
  ({ children, ...props }: DashboardLayoutProps) => {
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
        <SearchAppBar />
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
      </View>
    );
  },
);

DashboardLayout.displayName = "DashboardLayout";
