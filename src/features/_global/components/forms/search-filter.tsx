import { useLanguage } from "@core/libs";
import {
  BottomSheet,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
  RNPaper,
  View,
} from "@core/packages";
import { appStyles, rounded, spacings } from "@core/styles";
import { BaseBottomSheet, P, SvgIcon, useColors } from "@features/_global";
import {
  BottomSheetFooter,
  BottomSheetFooterProps,
} from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo } from "react";

export interface SearchFilterProps {
  placeholder?: string;
}

export const SearchFilter = React.memo(
  ({ placeholder = "Search...", ...props }: SearchFilterProps) => {
    const bottomSheetRef = React.useRef<BottomSheet | null>(null);
    const colors = useColors();
    const language = useLanguage();

    return (
      <>
        <View style={[appStyles.flexRow, appStyles.alignCenter]}>
          <View style={[appStyles.flex1]}>
            <RNPaper.TextInput
              placeholder={placeholder}
              style={{
                borderRadius: 16,
                height: 48,
              }}
              outlineStyle={{
                borderRadius: rounded.sm,
                borderColor: colors.primary(1),
              }}
              mode="outlined"
            />
          </View>
          <View>
            <RNPaper.IconButton
              mode="contained"
              containerColor={colors.primary(1)}
              icon={() => (
                <SvgIcon name="SortAsc" size={16} color={colors.white(1)} />
              )}
              size={24}
              onPress={() => bottomSheetRef.current?.expand()}
            />
          </View>
        </View>

        <BaseBottomSheet ref={bottomSheetRef}>
          <View style={[appStyles.pmd]}>
            <P>{language.dictionary("sortBy")}</P>
          </View>
        </BaseBottomSheet>
      </>
    );
  },
);
