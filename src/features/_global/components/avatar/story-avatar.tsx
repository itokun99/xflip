import { Pressable } from "@core/libs";
import { appStyles } from "@core/styles";
import { useColors } from "@features/_global/hooks";
import { User } from "lucide-react-native";
import React from "react";
import { Avatar } from "react-native-paper";

export interface StoryAvatarProps {
  image?: string;
  onPress?: () => void;
  bordered?: boolean;
}

export const StoryAvatar = React.memo((props: StoryAvatarProps) => {
  const colors = useColors();

  return (
    <Pressable
      style={[
        appStyles.overflowHidden,
        appStyles.roundedFull,
        props.bordered
          ? { borderWidth: 2, borderColor: colors.primary(1) }
          : { borderWidth: 2, borderColor: "transparent" },
      ]}
      onPress={props.onPress}>
      {props.image ? (
        <Avatar.Image
          source={{ uri: String(props.image) }}
          style={[colors.bgBlackAlpha10]}
        />
      ) : (
        <Avatar.Icon
          icon={() => <User color={colors.primary(1)} size={32} />}
          style={[colors.bgBlackAlpha10]}
          size={64}
        />
      )}
    </Pressable>
  );
});
