import { AppRegistry } from "react-native";
import { App } from "./src/features/_root/app";
import { setupOnlineManager } from "@features/_global";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);

setupOnlineManager();
