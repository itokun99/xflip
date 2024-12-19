import { React, View } from "@core/packages";
import { appStyles } from "@core/styles";
import { BrandLogo, P } from "@features/_global";
import { useColors } from "@features/_global/hooks";

export interface HeaderProps {
  title?: string;
  description?: string;
}

export const Header = React.memo((props: HeaderProps) => {
  const colors = useColors();
  return (
    <View style={[appStyles.ptxxl, appStyles.pbmd, appStyles.wfull]}>
      <View style={[appStyles.mbmd]}>
        <BrandLogo mode="light" />
      </View>
      {props.title && (
        <P size="xxl" bold style={[colors.textBlackAlpha100, appStyles.pbxs]}>
          {props.title}
        </P>
      )}
      {props.description && (
        <P size="sm" style={[colors.textBlackAlpha100, appStyles.pbmd]}>
          {props.description}
        </P>
      )}
    </View>
  );
});
