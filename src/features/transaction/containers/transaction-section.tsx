import { TransactionList } from "../components";
import { useTransaction } from "..";
import React, { useState } from "react";
import { SearchFilter, useDebounce } from "@features/_global";
import { View } from "@core/packages";
import { appStyles } from "@core/styles";
import { useLanguage } from "@core/libs";

export const TransactionSection = React.memo(() => {
  const [keyword, setKeyword] = useState("");
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

  const [filterValue, setFilterValue] = useState("");

  const transaction = useTransaction({
    keyword: debounceKeyword,
    sortBy: filterValue,
  });

  console.log("debounceKeyword", debounceKeyword);

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
        onPressItem={() => {}}
        items={transaction.all || []}
        refreshing={transaction.isLoading}
        onRefresh={transaction.refetch}
      />
    </>
  );
});

TransactionSection.displayName = "TransactionSection";
