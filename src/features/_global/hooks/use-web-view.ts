import { routeNames } from "@features/_root/utils";
import { Linking } from "react-native";
import { showMessage } from "react-native-flash-message";
import { useColors } from ".";
import { useNavigation } from "@react-navigation/native";

export const useWebView = () => {
  const navigation = useNavigation();

  const colors = useColors();

  const open = async (url: string) => {
    try {
      if (!Linking.canOpenURL(url)) {
        throw new Error("invalid");
      }

      navigation.navigate(
        routeNames.webview as never,
        {
          url,
        } as never,
      );
    } catch (err) {
      showMessage({
        message: "url tidak valid",
        backgroundColor: colors.danger(1),
        color: colors.white(1),
      });
    }
  };

  return {
    open,
  };
};
