import React from "react";
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useColors } from "@features/_global/hooks";
import { routeNames } from "@features/_root/utils";
import imgOnboard from "@core/assets/images/img-onboard.png";
import { appStyles, getFontFamily, rounded, spacings } from "@core/styles";
import { BrandLogo, P } from "@features/_global";
import { Button } from "react-native-paper";
import { getDictionary } from "@core/libs";

export const Onboard = () => {
  const navigation = useNavigation();
  const colors = useColors();
  const dimensions = useWindowDimensions();

  const handleNext = () => {
    navigation.navigate(routeNames.dashboard as never); // Navigasi ke halaman Register
  };

  return (
    <View style={[styles.container, colors.bgWhiteAlpha100]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary(1)} />
      <View
        style={[
          colors.bgPrimaryAlpha100,
          appStyles.absolute,
          appStyles.topZero,
          appStyles.overflowHidden,
          {
            borderBottomStartRadius: rounded.lg,
            borderBottomEndRadius: rounded.lg,
          },
          { height: dimensions.height * 0.5, width: dimensions.width },
        ]}
      />
      <View style={[appStyles.ptxxl, appStyles.pbmd, appStyles.wfull]}>
        <BrandLogo containerStyle={[appStyles.mblg]} />
        <P size="xl" bold style={[colors.textWhiteAlpha100, appStyles.mbxs]}>
          {`Umrah dan Ajak Sesama untuk Beribadah`}
        </P>
        <P size="xs" style={[colors.textWhiteAlpha100]}>
          {`Jadilah bagian dari kami dalam perjalanan umrah. Ajak orang terdekat Anda untuk beribadah bersama, dan hasilkan passive income dalam 1 aplikasi`}
        </P>
      </View>
      <View
        style={[
          appStyles.flex1,
          appStyles.alignCenter,
          appStyles.justifyCenter,
        ]}>
        <Image
          source={imgOnboard} // Gambar header untuk login
          style={[{ width: dimensions.width }]}
          resizeMode="contain"
        />
      </View>
      {/* Kontainer tombol */}
      <Button
        mode="contained"
        onPress={handleNext}
        buttonColor={colors.primary(1)}
        labelStyle={{
          fontFamily: getFontFamily("primary", "normal", "bold"),
        }}
        style={[appStyles.wfull, appStyles.pvxxs]}>
        {getDictionary("getStarted")}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spacings.xl,
    paddingBottom: 40,
  },

  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  secondaryButton: {
    borderColor: "#ccc",
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  versionText: {
    marginTop: 20,
    fontSize: 14,
    color: "#aaa",
  },
});
