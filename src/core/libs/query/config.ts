import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { QUERY_CONFIG } from "@core/configs";
import { RQ } from "@core/packages";
import { asyncStorage } from "../storage";

export const appQueryClient = new RQ.QueryClient({
  defaultOptions: {
    queries: {
      retry: QUERY_CONFIG.retry,
      gcTime: QUERY_CONFIG.gcTime,
    },
    mutations: {
      retry: QUERY_CONFIG.retry,
    },
  },
});

export const asyncStoragePersister = createAsyncStoragePersister({
  key: QUERY_CONFIG.persistorKey,
  storage: asyncStorage,
  throttleTime: QUERY_CONFIG.persistorThrottleTime,
  serialize: JSON.stringify,
  deserialize: JSON.parse,
});
