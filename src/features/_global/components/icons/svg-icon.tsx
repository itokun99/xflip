import React from "react";
import * as LucidIcon from "lucide-react-native";
import { StyleSheet } from "@core/packages";

type SvgIconNames = keyof typeof LucidIcon;

export interface SvgIconProps extends LucidIcon.LucideProps {
  name: SvgIconNames;
}

export const SvgIcon = React.memo(({ name, ...props }: SvgIconProps) => {
  const iconSvg = LucidIcon[name as keyof typeof LucidIcon];

  const baseStyle = StyleSheet.flatten([props.style]);

  if (!iconSvg) return null;

  const Comp = iconSvg as any;

  return <Comp size={props.size} style={baseStyle} color={props.color} />;
});

SvgIcon.displayName = "SvgIcon";
