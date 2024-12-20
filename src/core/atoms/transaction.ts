import { TransactionItemDataInterface } from "@core/interfaces";
import { transactionService } from "@core/services";
import { atomWithQuery } from "jotai-tanstack-query";

export const transactionAtom = atomWithQuery(() => ({
  queryKey: ["transactions"],
  queryFn: () =>
    transactionService.get().then(data => {
      if (!data) {
        throw new Error("data not found");
      }
      const others: TransactionItemDataInterface[] = [];
      const pending: TransactionItemDataInterface[] = [];
      const success: TransactionItemDataInterface[] = [];
      let totalAmount: number = 0;

      Object.values(data).forEach(trx => {
        switch (trx.status?.toLowerCase()) {
          case "success":
            success.push(trx);
            break;
          case "pending":
            pending.push(trx);
            break;
          default:
            others.push(trx);
            break;
        }

        if (!Number.isNaN(Number(trx.amount))) {
          totalAmount += Number(trx.amount);
        }
      });

      return {
        others,
        pending,
        success,
        totalAmount,
        all: [...others, ...pending, ...success],
      };
    }),
}));
