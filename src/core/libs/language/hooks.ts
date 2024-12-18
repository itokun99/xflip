import { dicts } from "./dicts";
import { defaultLanguage, languageAtom, languageStore } from ".";
import { useAtomValue } from "jotai";
import { useCallback } from "react";

type DictionaryKeys = keyof typeof dicts;

export const useLanguage = () => {
  const userLang = useAtomValue(languageAtom);

  const dictionary = useCallback(
    (word: DictionaryKeys) => {
      if (!word) return "";
      return (
        dicts?.[word]?.[userLang] || dicts?.[word]?.[defaultLanguage] || word
      );
    },
    [userLang],
  );

  return {
    dictionary,
  };
};
