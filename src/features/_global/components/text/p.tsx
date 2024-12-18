import React from "react";
import { Text } from "react-native";
import { BaseText, BaseTextProps } from "./base";

export const P = React.memo(
  React.forwardRef<Text, BaseTextProps>((props, ref) => {
    return (
      <BaseText ref={ref} {...props}>
        {props.children}
      </BaseText>
    );
  }),
);

P.displayName = "P";
