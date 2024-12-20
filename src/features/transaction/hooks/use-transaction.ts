import { transactionAtom } from "@core/atoms";
import { formatCurrency } from "@core/libs";
import { useAtom, React } from "@core/packages";
import { useMemo } from "react";

export const useTransaction = () => {
  const [query] = useAtom(transactionAtom);

  const totalAmountFormatted = formatCurrency(
    Number(query.data?.totalAmount),
    "Rp. ",
  );

  return {
    ...query.data,
    refetch: query.refetch,
    isLoading: query.isLoading,
    totalAmountFormatted,
  };
};
