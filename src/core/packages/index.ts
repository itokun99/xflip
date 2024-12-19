// import all as Package Name
import CryptoJS from "crypto-js";
import React from "react";
import * as RNPaper from "react-native-paper";
import * as RQ from "@tanstack/react-query";
import * as RQCore from "@tanstack/query-core";
import { Provider } from "jotai/react";
import { useHydrateAtoms } from "jotai/react/utils";
import { atomWithStorage } from "jotai/utils";
import * as RNMMKV from "react-native-mmkv";
import { queryClientAtom } from "jotai-tanstack-query";

// export directly
export * from "jotai";
export * from "react-native";
export * from "@react-navigation/native";
export * from "@react-navigation/bottom-tabs";
export * from "@react-navigation/native-stack";
export * from "react-native-flash-message";

export type { QueryClient as QueryClientCore } from "@tanstack/query-core";
export type * from "@tanstack/react-query";

// export from imported
export {
  CryptoJS,
  React,
  RNPaper,
  RQ,
  RQCore,
  RNMMKV,
  Provider,
  useHydrateAtoms,
  queryClientAtom,
  atomWithStorage,
};
