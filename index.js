import { AppRegistry } from "react-native";
import { App } from "./src/features/_root/app";
import { name as appName } from "./app.json";
import { setupOnlineManager } from "./src/core/libs/query";

AppRegistry.registerComponent(appName, () => App);
setupOnlineManager();
