import { useLanguage } from "@core/libs";
import {
  BottomSheet,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetFooter,
  BottomSheetFooterProps,
  BottomSheetView,
  RNPaper,
  React,
} from "@core/packages";
import { P, useColors, useStyles } from "@features/_global";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { PropsWithChildren, useCallback, useImperativeHandle } from "react";

export interface BaseBottomSheetProps extends PropsWithChildren {
  buttonPlaceholder?: string;
  onPressSubmit?: () => void;
  onClose?: () => void;
}

export const BaseBottomSheet = React.forwardRef<
  BottomSheet | null,
  BaseBottomSheetProps
>(({ ...props }, ref) => {
  const [mount, setMount] = React.useState(false);
  const colors = useColors();
  const language = useLanguage();
  const bottomSheetRef = React.useRef<BottomSheet | null>(null);
  const snapPoints = React.useMemo(() => ["1%", "30%", "40%", "60%"], []);

  const styles = useStyles(({ appStyles, spacings, rounded }) => ({
    footer: {
      ...appStyles.pmd,
      borderTopColor: colors.black(0.1),
      borderTopWidth: 1,
      backgroundColor: colors.white(1),
    },
    cta: { borderRadius: rounded.sm, paddingVertical: spacings.xxs },
  }));

  const handlePressButton = useCallback(() => {
    props.onPressSubmit?.();
    bottomSheetRef.current?.close();
  }, [props.onPressSubmit]);

  const handleSheetChanges = React.useCallback(
    (index: number) => {
      if (index <= 0) {
        props.onClose?.();
      }
    },
    [props.onClose],
  );

  // renders
  const renderFooter = React.useCallback(
    (p: BottomSheetFooterProps) => (
      <BottomSheetFooter {...p} style={styles.footer}>
        <RNPaper.Button
          onPress={handlePressButton}
          style={styles.cta}
          mode="contained"
          buttonColor={colors.primary(1)}>
          <P size="base" style={[colors.textWhiteAlpha100]} bold>
            {props.buttonPlaceholder || language.dictionary("submit")}
          </P>
        </RNPaper.Button>
      </BottomSheetFooter>
    ),
    [handlePressButton, colors, language, props.buttonPlaceholder],
  );

  const renderBackdrop = React.useCallback((p: BottomSheetBackdropProps) => {
    return <BottomSheetBackdrop {...p} opacity={0.5} appearsOnIndex={1} />;
  }, []);

  React.useEffect(() => {
    const t = setTimeout(() => {
      setMount(true);
      console.log("sheet mounting...");
    }, 500);
    return () => {
      clearTimeout(t);
      setMount(false);
    };
  }, []);

  useImperativeHandle(
    ref,
    () => bottomSheetRef?.current as BottomSheetMethods,
    [mount],
  );

  return (
    <RNPaper.Portal>
      <BottomSheet
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        enablePanDownToClose
        footerComponent={renderFooter}
        backdropComponent={renderBackdrop}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}>
        <BottomSheetView>{props.children}</BottomSheetView>
      </BottomSheet>
    </RNPaper.Portal>
  );
});
