import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootLayout } from "@features/_global";
import { AppRouter } from "./router";
import { Appearance } from "react-native";
import { AppQueryClientProvider } from "@core/libs/query";
import { LanguageProvider } from "@core/libs/language";

export function App(): React.JSX.Element {
  useEffect(() => Appearance.setColorScheme("light"), []);
  return (
    <LanguageProvider>
      <AppQueryClientProvider>
        <RootLayout>
          <NavigationContainer>
            <AppRouter />
          </NavigationContainer>
        </RootLayout>
      </AppQueryClientProvider>
    </LanguageProvider>
  );
}
