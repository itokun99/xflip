import { View, Pressable, StyleSheet, RNPaper } from "@core/packages";
import { appStyles } from "@core/styles";
import { useColors } from "@features/_global";
import { routeNames } from "@features/_root/utils";
import { useNavigation } from "@react-navigation/native";
import { Bell, User } from "lucide-react-native";
import React from "react";
import { useProfile } from "@features/profile";
import { P } from "@features/_global";
import { useLanguage } from "@core/libs";

const ICON_SIZE = 40;

export const SearchAppBar = React.memo(() => {
  const navigation = useNavigation();
  const colors = useColors();
  const profile = useProfile();
  const language = useLanguage();

  const handlePressMe = () => {
    navigation.navigate(routeNames.profile as never);
  };

  return (
    <View style={styles.container}>
      <View style={[appStyles.flex1]}>
        {/* <SearchInput /> */}
        <P bold size="lg">
          {language.dictionary("home")}
        </P>
      </View>
      <View style={styles.buttonWrapper}>
        <Pressable>
          <RNPaper.Avatar.Icon
            style={{ backgroundColor: "transparent" }}
            size={ICON_SIZE}
            icon={() => <Bell color={colors.black(0.8)} />}
          />
        </Pressable>
        <Pressable onPress={handlePressMe}>
          {profile.image ? (
            <RNPaper.Avatar.Image
              style={colors.bgGrayAlpha100}
              size={ICON_SIZE}
              source={{ uri: profile.image }}
            />
          ) : (
            <RNPaper.Avatar.Icon
              style={colors.bgGrayAlpha100}
              size={ICON_SIZE}
              icon={() => <User color={colors.black(0.8)} />}
            />
          )}
        </Pressable>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: StyleSheet.flatten([
    appStyles.flexRow,
    appStyles.alignCenter,
    appStyles.pvsm,
    appStyles.phmd,
    appStyles.gsm,
  ]),

  buttonWrapper: StyleSheet.flatten([appStyles.flexRow, appStyles.gxs]),
});
