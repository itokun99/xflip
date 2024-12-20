import { appStyles } from "@core/styles";
import { PropsWithChildren } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  FlashMessage,
  GestureHandlerRootView,
  RNPaper,
} from "@core/packages";

export interface RootLayoutProps extends PropsWithChildren {}
export const RootLayout = (props: RootLayoutProps) => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#000" : "#FFF",
    flex: 1,
  };

  return (
    <GestureHandlerRootView style={[appStyles.flex1]}>
      <RNPaper.PaperProvider>
        <FlashMessage position="top" floating />
        <SafeAreaView style={styles.wrapper}>
          <StatusBar
            barStyle={isDarkMode ? "light-content" : "dark-content"}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          {props.children}
        </SafeAreaView>
      </RNPaper.PaperProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
