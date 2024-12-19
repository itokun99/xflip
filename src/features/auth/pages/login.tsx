import React, { useEffect } from "react";
import { View, StyleSheet, StatusBar, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useColors, useWebView } from "@features/_global";
import { routeNames } from "@features/_root/utils";
import { appStyles, spacings } from "@core/styles";
import { P } from "@features/_global";
import { ActivityIndicator, Avatar, Button, FAB } from "react-native-paper";
import { Shape } from "../components";
import { useProfile } from "@features/profile";
import { useLanguage } from "@core/libs";
import { ArrowRight } from "lucide-react-native";

export const Login = () => {
  const language = useLanguage();
  const navigation = useNavigation();
  const colors = useColors();
  const profile = useProfile();
  const webview = useWebView();

  const handleNext = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: routeNames.dashboard as never }],
    });
  };

  return (
    <View style={[styles.container, colors.bgWhiteAlpha100]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary(1)} />
      <Shape />

      <View style={styles.content}>
        <Avatar.Image
          size={120}
          source={{ uri: profile.image }}
          style={[appStyles.mbmd]}
        />
        <P size="sm">{language.dictionary("loginAs")}</P>
        <P bold size="lg">
          {profile.name}
        </P>

        <Pressable onPress={() => webview.open(profile.portoUrl)}>
          <P bold size="xs" style={[appStyles.pblg]}>
            {profile.portoUrl}
          </P>
        </Pressable>

        <FAB
          style={[appStyles.roundedFull, colors.bgPrimaryAlpha100]}
          icon={() => <ArrowRight color={colors.white(1)} />}
          onPress={handleNext}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...appStyles.flex1,
    ...appStyles.justifyCenter,
    justifyContent: "center",
    paddingHorizontal: spacings.xl,
    paddingBottom: 40,
  },
  content: {
    ...appStyles.justifyCenter,
    ...appStyles.alignCenter,
  },
});
