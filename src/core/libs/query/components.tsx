import { QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";
import { appQueryClient } from "./config";

export const AppQueryClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={appQueryClient}>
      {children}
    </QueryClientProvider>
  );
};
