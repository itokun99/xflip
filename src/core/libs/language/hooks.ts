import { dicts } from "./dicts";
import { defaultLanguage, languageAtom, replaceString } from ".";
import { useAtomValue } from "jotai";
import { useCallback } from "react";

type DictionaryKeys = keyof typeof dicts;

export const useLanguage = () => {
  const userLang = useAtomValue(languageAtom);

  const dictionary = useCallback(
    (word: DictionaryKeys, replacements?: Record<string, string>) => {
      if (!word) return "";

      let result =
        dicts?.[word]?.[userLang] || dicts?.[word]?.[defaultLanguage] || word;
      if (replacements && Object.keys(replacements)?.length > 0) {
        result = replaceString(result, replacements);
      }
      return result;
    },
    [userLang],
  );

  return {
    dictionary,
  };
};
