// import all as Package Name
import CryptoJS from "crypto-js";
import React from "react";
import * as RNPaper from "react-native-paper";
import * as RQ from "@tanstack/react-query";
import * as RQCore from "@tanstack/query-core";
import { Provider } from "jotai/react";
import { useHydrateAtoms } from "jotai/react/utils";
import { atomWithStorage } from "jotai/utils";
import FlashMessage from "react-native-flash-message";
import * as RNMMKV from "react-native-mmkv";
import { queryClientAtom } from "jotai-tanstack-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Clipboard from "@react-native-clipboard/clipboard";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
  BottomSheetFooter,
} from "@gorhom/bottom-sheet";

// export directly
export * from "jotai";
export * from "react-native";
export * from "@react-navigation/native";
export * from "@react-navigation/bottom-tabs";
export * from "@react-navigation/native-stack";
export * from "react-native-flash-message";

export type { QueryClient as QueryClientCore } from "@tanstack/query-core";
export type * from "@tanstack/react-query";
export type {
  BottomSheetBackdropProps,
  BottomSheetFooterProps,
} from "@gorhom/bottom-sheet";

// export from imported
export {
  CryptoJS,
  React,
  RNPaper,
  RQ,
  RQCore,
  RNMMKV,
  Provider,
  FlashMessage,
  useHydrateAtoms,
  queryClientAtom,
  atomWithStorage,
  BottomSheet,
  BottomSheetFooter,
  BottomSheetBackdrop,
  BottomSheetView,
  Clipboard,
  GestureHandlerRootView,
};
