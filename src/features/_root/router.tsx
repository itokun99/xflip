import { React } from "@core/packages";
import { Dashboard } from "@features/dashboard";
import { routeNames } from "./utils";
import { Onboard } from "@features/onboard";
import { ProfileLanding } from "@features/profile";
import { GlobalWebView, Splash } from "@features/_global";
import { Stack } from "@core/libs";

export const AppRouter = React.memo(() => {
  return (
    <Stack.Navigator initialRouteName={routeNames.splash}>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routeNames.splash} component={Splash} />
        <Stack.Screen
          name={routeNames.webview}
          options={{ headerShown: false }}
          component={GlobalWebView}
        />
        <Stack.Screen name={routeNames.dashboard} component={Dashboard} />
        <Stack.Screen name={routeNames.profile} component={ProfileLanding} />
        <Stack.Screen name={routeNames.onboard} component={Onboard} />
      </Stack.Group>
    </Stack.Navigator>
  );
});
