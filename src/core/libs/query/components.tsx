import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";
import { appQueryClient, asyncStoragePersister } from "./config";

export const AppQueryClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={appQueryClient}>
      {children}
    </QueryClientProvider>
  );
};

export const AppPersistQueryClientProvider = ({
  children,
}: PropsWithChildren) => {
  return (
    <PersistQueryClientProvider
      client={appQueryClient}
      persistOptions={{ persister: asyncStoragePersister }}>
      {children}
    </PersistQueryClientProvider>
  );
};
