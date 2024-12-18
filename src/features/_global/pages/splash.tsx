import React, { useEffect } from "react";
import {
  View,
  Image,
  ActivityIndicator,
  StyleSheet,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import imgSplash from "@core/assets/images/img-splash.png";
import { routeNames } from "@features/_root/utils";
import { useColors } from "../hooks";

export const Splash = () => {
  const navigation = useNavigation();
  const colors = useColors();

  useEffect(() => {
    // Simulasi loading, misalnya data dari API atau local storage
    const timer = setTimeout(() => {
      navigation.navigate(routeNames.onboard as never); // Setelah loading, redirect ke halaman login
    }, 5000); // 3 detik
    return () => clearTimeout(timer); // Clear timer saat komponen unmount
  }, [navigation]);

  return (
    <View style={[styles.container, colors.bgPrimaryAlpha100]}>
      <StatusBar backgroundColor={colors.primary(1)} barStyle="light-content" />
      <Image style={styles.image} source={imgSplash} resizeMode="cover" />
      <ActivityIndicator
        size="large"
        color={colors.white(1)}
        style={styles.loader}
      />
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
  loader: {
    position: "absolute",
    bottom: 50, // Loader di bagian bawah
  },
});
