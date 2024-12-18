import React from "react";
import { ImageIcon } from "..";
import { Pressable, StyleSheet, View } from "react-native";
import { appStyles, rounded, spacings } from "@core/styles";
import TurboImage from "react-native-turbo-image";
import { Avatar } from "../avatar";
import { useColors } from "@features/_global/hooks";

export const AppBar = React.memo(() => {
  const colors = useColors();
  return (
    <View
      style={[
        { backgroundColor: colors.primary(1) },
        appStyles.flexRow,
        appStyles.pvxs,
      ]}>
      <View style={styles.actionLeft}>
        <Pressable style={styles.cta}>
          {/* <ImageIcon src={appContent?.tbl0?.[0]?.icon_topbtn_leftBar} /> */}
        </Pressable>
      </View>
      <View style={[appStyles.flex1, appStyles.alignCenter]}>
        {/* <TurboImage */}
        {/*   source={{ uri: appContent?.tbl0?.[0]?.image_LogoTopBar }} */}
        {/*   format="apng" */}
        {/*   style={styles.logo} */}
        {/* /> */}
      </View>
      <View style={styles.actionRight}>
        <Pressable style={styles.cta}>
          {/* <ImageIcon src={appContent?.tbl0?.[0]?.icon_topbtn_notification} /> */}
        </Pressable>
        {/* <Avatar src={appContent?.tbl0?.[0]?.Auth_PhotoPath} /> */}
      </View>
    </View>
  );
});

AppBar.displayName = "AppBar";

const styles = StyleSheet.create({
  cta: StyleSheet.flatten([appStyles.pxxs, { borderRadius: rounded.full }]),
  actionLeft: StyleSheet.flatten([
    appStyles.absolute,
    appStyles.mvsm,
    appStyles.mlmd,
    {
      left: 0,
    },
  ]),
  actionRight: StyleSheet.flatten([
    appStyles.absolute,
    appStyles.flexRow,
    appStyles.mvsm,
    appStyles.mrmd,
    appStyles.alignCenter,

    {
      gap: spacings.xs,
      right: 0,
    },
  ]),
  logo: { width: 100, height: 40 },
});
