import { TransactionList } from "../components";
import { useTransaction } from "..";
import React, { useState } from "react";
import { SearchFilter, useDebounce } from "@features/_global";
import { View, useNavigation } from "@core/packages";
import { appStyles } from "@core/styles";
import { useLanguage } from "@core/libs";
import { TransactionItemDataInterface } from "@core/interfaces";
import { routeNames } from "@features/_root/utils";

export const TransactionSection = React.memo(() => {
  const navigation = useNavigation();
  const [keyword, setKeyword] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const debounceKeyword = useDebounce(keyword, 500);

  const language = useLanguage();
  const filterOptions = React.useMemo(
    () => [
      {
        label: language.dictionary("nameAZ"),
        value: "name-asc",
      },
      {
        label: language.dictionary("nameZA"),
        value: "name-desc",
      },
      {
        label: language.dictionary("latestDate"),
        value: "date-desc",
      },
      {
        label: language.dictionary("oldestDate"),
        value: "date-asc",
      },
    ],
    [language],
  );

  const transaction = useTransaction({
    keyword: debounceKeyword,
    sortBy: filterValue,
  });

  const navigateToDetail = (item: TransactionItemDataInterface) => {
    navigation.navigate(
      routeNames.transactionDetail as never,
      { data: JSON.stringify(item) } as never,
    );
  };

  return (
    <>
      <View style={[appStyles.phmd, appStyles.pvmd]}>
        <SearchFilter
          searchValue={keyword}
          filterOptions={filterOptions}
          filterValue={filterValue}
          onFilterApply={v => setFilterValue(v)}
          onInputSearchChange={v => setKeyword(v)}
        />
      </View>
      <TransactionList
        onPressItem={navigateToDetail}
        items={transaction.all || []}
        refreshing={transaction.isLoading}
        onRefresh={transaction.refetch}
      />
    </>
  );
});

TransactionSection.displayName = "TransactionSection";
