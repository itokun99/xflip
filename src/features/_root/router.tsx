import { Stack } from "@features/_global";
import { Dashboard } from "@features/dashboard";
import React from "react";
import { routeNames } from "./utils";
import { Login, Onboard, Register } from "@features/auth/pages";
import { GlobalWebView, Splash } from "@features/_global/pages";

export const AppRouter = React.memo(() => {
  return (
    <Stack.Navigator initialRouteName={routeNames.splash}>
      <Stack.Screen
        name={routeNames.splash}
        options={{ headerShown: false }}
        component={Splash}
      />
      <Stack.Screen
        name={routeNames.webview}
        options={{ headerShown: false }}
        component={GlobalWebView}
      />
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routeNames.dashboard} component={Dashboard} />
      </Stack.Group>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routeNames.onboard} component={Onboard} />
        <Stack.Screen name={routeNames.login} component={Login} />
        <Stack.Screen name={routeNames.register} component={Register} />
      </Stack.Group>
    </Stack.Navigator>
  );
});
