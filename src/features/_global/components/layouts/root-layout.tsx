import { appStyles } from "@core/styles";
import React, { PropsWithChildren } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from "react-native";
import FlashMessage from "react-native-flash-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export interface RootLayoutProps extends PropsWithChildren {}
export const RootLayout = (props: RootLayoutProps) => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#000" : "#FFF",
    flex: 1,
  };

  return (
    <GestureHandlerRootView style={[appStyles.flex1]}>
      <FlashMessage position="top" floating />
      <SafeAreaView style={styles.wrapper}>
        <StatusBar
          barStyle={isDarkMode ? "light-content" : "dark-content"}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        {props.children}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
