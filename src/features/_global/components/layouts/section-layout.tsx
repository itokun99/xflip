import { StyleSheet, View } from "react-native";
import { appStyles } from "@core/styles";
import React, { PropsWithChildren, useEffect } from "react";
import { P } from "../text";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export interface SectionLayoutProps extends PropsWithChildren {
  title?: string;
  gutter?: boolean;
  header?: boolean;
  headerGutter?: boolean;
  bodyGutter?: boolean;
  animateDuration?: number;
}

export const SectionLayout = React.memo(
  ({
    title,
    header = true,
    animateDuration = 500,
    ...props
  }: SectionLayoutProps) => {
    const opacity = useSharedValue(0);
    const translateY = useSharedValue(100); // Mulai dari sedikit di bawah posisi awal

    // Animasi fade-in dan slide-up saat komponen di-mount
    useEffect(() => {
      opacity.value = withTiming(1, { duration: animateDuration });
      translateY.value = withTiming(0, { duration: animateDuration }); // Durasi dan timing yang sama
    }, [animateDuration]); // Animasi fade-in saat komponen di-mount

    // Gaya animasi menggunakan opacity dan translateY
    const animatedStyle = useAnimatedStyle(() => ({
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    }));

    const baseContainerStyle = StyleSheet.flatten([
      props.gutter ? appStyles.phmd : {},
      appStyles.mblg,
    ]);
    return (
      <Animated.View style={[baseContainerStyle, animatedStyle]}>
        {header && (
          <View
            style={[
              appStyles.flexRow,
              appStyles.mbsm,
              props.headerGutter ? appStyles.phmd : {},
            ]}>
            {title && (
              <P size="xl" bold>
                {title}
              </P>
            )}
          </View>
        )}
        <View style={[props.bodyGutter ? appStyles.phmd : {}]}>
          {props.children}
        </View>
      </Animated.View>
    );
  },
);
