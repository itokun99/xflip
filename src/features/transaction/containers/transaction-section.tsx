import { TransactionList } from "../components";
import { useTransaction } from "..";
import React from "react";

export const TransactionSection = React.memo(() => {
  const transaction = useTransaction();
  return (
    <>
      <TransactionList
        items={transaction.all || []}
        refreshing={transaction.isLoading}
        onRefresh={transaction.refetch}
      />
    </>
  );
});

TransactionSection.displayName = "TransactionSection";
