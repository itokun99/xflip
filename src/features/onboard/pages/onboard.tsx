import React from "react";
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
  RNPaper,
  useNavigation,
} from "@core/packages";
import { useColors } from "@features/_global/hooks";
import { routeNames } from "@features/_root/utils";
import imgOnboard from "@core/assets/images/img-onboard.png";
import { appStyles, getFontFamily, spacings } from "@core/styles";
import { BrandLogo, P } from "@features/_global";
import { useLanguage } from "@core/libs/language";

export const Onboard = () => {
  const navigation = useNavigation();
  const language = useLanguage();
  const colors = useColors();
  const dimensions = useWindowDimensions();

  const handleNext = () => {
    console.log("test");
    navigation.reset({
      index: 0,
      routes: [{ name: routeNames.dashboard as never }],
    });
  };

  return (
    <View style={[styles.container, colors.bgWhiteAlpha100]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary(1)} />
      <View style={[appStyles.ptxxl, appStyles.pbmd, appStyles.wfull]}>
        <BrandLogo mode="light" containerStyle={[appStyles.mblg]} />
        <P size="xl" bold style={[colors.textBlackAlpha100, appStyles.mbxs]}>
          {language.dictionary("onboardTitle")}
        </P>
        <P size="base" style={[colors.textBlackAlpha100]}>
          {language.dictionary("onboardDesc")}
        </P>
      </View>
      <View
        style={[
          appStyles.flex1,
          appStyles.alignCenter,
          appStyles.justifyCenter,
        ]}>
        <Image
          source={imgOnboard}
          style={[{ width: dimensions.width }]}
          resizeMode="contain"
        />
      </View>
      <RNPaper.Button
        mode="contained"
        onPress={handleNext}
        buttonColor={colors.primary(1)}
        labelStyle={{
          fontFamily: getFontFamily("primary", "normal", "bold"),
        }}
        style={[appStyles.wfull, appStyles.pvxxs]}>
        {language.dictionary("getStarted")}
      </RNPaper.Button>
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
