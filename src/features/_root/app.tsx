import { NavigationContainer } from "@react-navigation/native";
import { RootLayout } from "@features/_global";
import { AppRouter } from "./router";
import { AppPersistQueryClientProvider } from "@core/libs/query";
import { LanguageProvider } from "@core/libs/language";
import { HydrateAtoms } from "@core/libs";
import { Appearance, React } from "@core/packages";

export function App() {
  React.useEffect(() => Appearance.setColorScheme("light"), []);
  return (
    <AppPersistQueryClientProvider>
      <LanguageProvider>
        <HydrateAtoms>
          <RootLayout>
            <NavigationContainer>
              <AppRouter />
            </NavigationContainer>
          </RootLayout>
        </HydrateAtoms>
      </LanguageProvider>
    </AppPersistQueryClientProvider>
  );
}
