import { TextInput, View, Pressable, StyleSheet } from "react-native";
import { appStyles } from "@core/styles";
import { useColors } from "@features/_global/hooks";
import { routeNames } from "@features/_root/utils";
import { useNavigation } from "@react-navigation/native";
import { Bell, Search, User } from "lucide-react-native";
import React from "react";
import { Avatar } from "react-native-paper";

const ICON_SIZE = 40;

export const SearchInput = React.memo(() => {
  const colors = useColors();
  return (
    <View
      style={[
        colors.bgGrayAlpha100,
        appStyles.roundedFull,
        appStyles.overflowHidden,
        appStyles.relative,
        { height: ICON_SIZE },
      ]}>
      <TextInput placeholder="Cari..." style={[appStyles.plmd]} />
      <Pressable
        style={[
          appStyles.absolute,
          appStyles.justifyCenter,
          appStyles.alignCenter,
          { width: 32, height: 32, marginTop: 4, right: 6 },
          colors.bgPrimaryAlpha100,
          appStyles.overflowHidden,
          appStyles.roundedFull,
        ]}>
        <Search size={20} color={colors.white(1)} />
      </Pressable>
    </View>
  );
});

export const SearchAppBar = React.memo(() => {
  const navigation = useNavigation();
  const colors = useColors();

  const handlePressMe = () => {
    navigation.navigate(routeNames.login as never);
  };

  return (
    <View style={styles.container}>
      <View style={[appStyles.flex1]}>
        <SearchInput />
      </View>
      <View style={styles.buttonWrapper}>
        <Pressable>
          <Avatar.Icon
            style={{ backgroundColor: "transparent" }}
            size={ICON_SIZE}
            icon={() => <Bell color={colors.black(0.8)} />}
          />
        </Pressable>
        <Pressable onPress={handlePressMe}>
          <Avatar.Icon
            style={colors.bgGrayAlpha100}
            size={ICON_SIZE}
            icon={() => <User color={colors.black(0.8)} />}
          />
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
