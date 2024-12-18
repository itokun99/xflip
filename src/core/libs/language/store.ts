import { atom, createStore } from "jotai";
import { LanguageType } from ".";

export const defaultLanguage: LanguageType = "id";
export const languageAtom = atom(defaultLanguage);
export const languageStore = createStore();

// subcription / listenenr
languageStore.sub(languageAtom, () => {
  console.log("language changed to", languageStore.get(languageAtom));
});
