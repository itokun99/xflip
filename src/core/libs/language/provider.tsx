import { Provider } from "jotai";
import React, { PropsWithChildren } from "react";
import { languageStore } from ".";

export const LanguageProvider = React.memo((props: PropsWithChildren) => {
  return <Provider store={languageStore}>{props.children}</Provider>;
});
