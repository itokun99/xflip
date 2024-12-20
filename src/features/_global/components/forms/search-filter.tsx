import { useLanguage } from "@core/libs";
import { BottomSheet, RNPaper, View } from "@core/packages";
import { appStyles, rounded, spacings } from "@core/styles";
import {
  BaseBottomSheet,
  BaseCard,
  P,
  SvgIcon,
  useColors,
} from "@features/_global";

import React, { useCallback, useMemo } from "react";

interface FilterOptionInterface {
  label: string;
  value: string;
}

export interface SearchFilterProps {
  searchValue?: string;
  placeholder?: string;
  filterValue?: string;
  filterOptions?: FilterOptionInterface[];
  onFilterApply?: (value: string) => void;
  onInputSearchChange?: (value: string) => void;
}

export const SearchFilter = React.memo(
  ({
    placeholder = "Search...",
    filterOptions = [],
    filterValue,
    ...props
  }: SearchFilterProps) => {
    const bottomSheetRef = React.useRef<BottomSheet | null>(null);
    const colors = useColors();
    const language = useLanguage();
    const [sortValue, setSortValue] = React.useState(filterValue || "");

    const selectedSortValue = useMemo(
      () => filterOptions?.find(d => d.value === filterValue),
      [filterOptions, filterValue],
    );

    const handlePressSubmit = useCallback(() => {
      props?.onFilterApply?.(sortValue);
    }, [props.onFilterApply, sortValue]);

    const handlePressSortButton = useCallback(() => {
      bottomSheetRef.current?.expand();
      if (filterValue) {
        setSortValue(filterValue);
      }
    }, [filterValue]);

    const handleSheetClose = () => {
      setSortValue(filterValue || "");
    };

    return (
      <>
        <View
          style={[
            appStyles.flexRow,
            appStyles.alignCenter,
            selectedSortValue?.value ? { ...appStyles.pbxs } : {},
          ]}>
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
              value={props.searchValue}
              onChangeText={props.onInputSearchChange}
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
              onPress={handlePressSortButton}
            />
          </View>
        </View>
        {selectedSortValue && (
          <View style={[appStyles.flexRow]}>
            <RNPaper.Chip
              onClose={() => props.onFilterApply?.("")}
              closeIcon={() => (
                <SvgIcon name="X" color={colors.primary(1)} size={16} />
              )}>
              {selectedSortValue?.label}
            </RNPaper.Chip>
          </View>
        )}

        <BaseBottomSheet
          onClose={handleSheetClose}
          onPressSubmit={handlePressSubmit}
          buttonPlaceholder={language.dictionary("apply")}
          ref={bottomSheetRef}>
          <View style={[appStyles.pmd]}>
            <View style={[appStyles.pvsm]}>
              <P bold>{language.dictionary("sortBy")}</P>
            </View>
            <RNPaper.RadioButton.Group
              onValueChange={newValue => {
                setSortValue(newValue);
              }}
              value={sortValue}>
              <View style={[appStyles.flexColumn, appStyles.gsm]}>
                {filterOptions?.map((opt, i) => {
                  return (
                    <BaseCard
                      onPress={() => setSortValue(opt.value)}
                      style={[
                        appStyles.flexRow,
                        appStyles.justifyBetween,
                        appStyles.alignCenter,
                        {
                          height: 48,
                        },
                      ]}
                      key={i}>
                      <P>{opt.label}</P>
                      <RNPaper.RadioButton value={opt.value} />
                    </BaseCard>
                  );
                })}
              </View>
            </RNPaper.RadioButton.Group>
          </View>
        </BaseBottomSheet>
      </>
    );
  },
);
