import { P } from "@features/_global";
import React from "react";
import { StyleProp, View, ViewStyle } from "@core/packages";

export interface LabelValueProps {
  label?: string;
  value?: string;
  style?: StyleProp<ViewStyle>;
}

export const LabelValue = React.memo((props: LabelValueProps) => {
  return (
    <View style={[props.style]}>
      {props.label && <P bold>{props.label}</P>}
      {props.value && <P size="sm">{props.value}</P>}
    </View>
  );
});
