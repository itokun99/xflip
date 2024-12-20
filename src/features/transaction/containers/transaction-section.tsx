import { TransactionList } from "../components";
import { useTransaction } from "..";
import React from "react";
import { SearchFilter } from "@features/_global";
import { View } from "@core/packages";
import { appStyles } from "@core/styles";

export const TransactionSection = React.memo(() => {
  const transaction = useTransaction();
  return (
    <>
      <View style={[appStyles.phmd, appStyles.pvmd]}>
        <SearchFilter />
      </View>
      <TransactionList
        items={transaction.all || []}
        refreshing={transaction.isLoading}
        onRefresh={transaction.refetch}
      />
    </>
  );
});

TransactionSection.displayName = "TransactionSection";
