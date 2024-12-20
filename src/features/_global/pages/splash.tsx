import {
  React,
  StatusBar,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "@core/packages";
import { useNavigation } from "@react-navigation/native";
import imgSplash from "@core/assets/images/img-splash.png";
import { routeNames } from "@features/_root/utils";
import { useColors, BrandLogo, P } from "@features/_global";
import { useLanguage } from "@core/libs";
import { appStyles } from "@core/styles";

export const Splash = () => {
  const navigation = useNavigation();
  const colors = useColors();
  const language = useLanguage();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(routeNames.onboard as never); // Setelah loading, redirect ke halaman login
    }, 3000);
    return () => clearTimeout(timer); // Clear timer saat komponen unmount
  }, [navigation]);

  return (
    <View style={[styles.container, colors.bgPrimaryAlpha100]}>
      <StatusBar backgroundColor={colors.primary(1)} barStyle="light-content" />
      <Image style={styles.image} source={imgSplash} resizeMode="cover" />

      <View style={styles.content}>
        <View style={[appStyles.alignCenter, appStyles.gxs]}>
          <BrandLogo imageMode="light" mode="dark" />
          <P style={[colors.textWhiteAlpha100]} size="xs">
            {language.dictionary("splashText")}
          </P>
          <ActivityIndicator size="small" color={colors.white(1)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  content: {
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});
