import { API_CONFIG } from "@core/configs";
import { TransactionItemDataInterface } from "@core/interfaces";
import { http } from "@core/libs";

export const transactionService = {
  get: http.get<Record<string, TransactionItemDataInterface>>(
    `${API_CONFIG.baseUrl}/${API_CONFIG.endpoints.transactions}`,
  ),
};
