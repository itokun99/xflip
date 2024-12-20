import { transactionAtom } from "@core/atoms";
import { formatCurrency, searchKeyword } from "@core/libs";
import { useAtom, React } from "@core/packages";
import { useMemo } from "react";

export interface UseTransactionProps {
  keyword?: string;
  sortBy?: string;
}

export const useTransaction = (props?: UseTransactionProps) => {
  const [query] = useAtom(transactionAtom);

  const totalAmountFormatted = formatCurrency(
    Number(query.data?.totalAmount),
    "Rp. ",
  );

  const all = useMemo(() => {
    let result = query.data?.all;

    if (
      query.data?.all &&
      query.data?.all?.length &&
      query.data?.all?.length > 0 &&
      props?.keyword
    ) {
      result = query.data?.all?.filter(
        d =>
          searchKeyword(d.beneficiary_name, String(props?.keyword)) ||
          searchKeyword(d.beneficiary_bank, String(props?.keyword)) ||
          searchKeyword(d.sender_bank, String(props?.keyword)) ||
          searchKeyword(String(d.amount), String(props?.keyword)),
      );
    }
    return result;
  }, [query.data, props?.keyword, props?.sortBy]);

  return {
    ...query.data,
    all: all,
    refetch: query.refetch,
    isLoading: query.isLoading,
    totalAmountFormatted,
  };
};
