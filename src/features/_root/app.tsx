import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppQueryClientProvider, RootLayout } from "@features/_global";
import { AppRouter } from "./router";
import { Appearance } from "react-native";
import { Provider } from "jotai";
import { languageStore } from "@core/libs";

export function App(): React.JSX.Element {
  useEffect(() => Appearance.setColorScheme("light"), []);
  return (
    <Provider store={languageStore}>
      <AppQueryClientProvider>
        <RootLayout>
          <NavigationContainer>
            <AppRouter />
          </NavigationContainer>
        </RootLayout>
      </AppQueryClientProvider>
    </Provider>
  );
}
