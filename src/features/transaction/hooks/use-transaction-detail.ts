import { TransactionItemDataInterface } from "@core/interfaces";
import { useRoute } from "@core/packages";
import { useMemo } from "react";

export const useTransactionDetail = () => {
  const route = useRoute();
  const routeParams = route.params as { data?: string };
  const detailData = useMemo(() => {
    try {
      return routeParams.data
        ? (JSON.parse(routeParams.data || "") as TransactionItemDataInterface)
        : null;
    } catch (err) {
      return null;
    }
  }, [routeParams?.data]);

  return detailData;
};
