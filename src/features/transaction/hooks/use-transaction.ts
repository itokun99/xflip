import { transactionAtom } from "@core/atoms";
import {
  formatCurrency,
  searchKeyword,
  sortByDate,
  sortByName,
} from "@core/libs";
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
    const hasData =
      query.data?.all && query.data?.all?.length && query.data?.all?.length > 0;

    if (hasData && props?.keyword) {
      result = query.data?.all?.filter(
        d =>
          searchKeyword(d.beneficiary_name, String(props?.keyword)) ||
          searchKeyword(d.beneficiary_bank, String(props?.keyword)) ||
          searchKeyword(d.sender_bank, String(props?.keyword)) ||
          searchKeyword(String(d.amount), String(props?.keyword)),
      );
    }

    if (hasData && props?.sortBy) {
      switch (props.sortBy) {
        case "name-asc":
          result = sortByName(result || [], "beneficiary_name", true);
          break;
        case "name-desc":
          result = sortByName(result || [], "beneficiary_name", false);
          break;
        case "date-asc":
          result = sortByDate(result || [], "created_at", true);
          break;

        case "date-desc":
          result = sortByDate(result || [], "created_at", false);
          break;
      }
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
