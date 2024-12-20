import { dicts } from "./dicts";
import { LanguageType, replaceString } from "@core/libs";
import { useAtomValue } from "jotai";
import { useCallback } from "react";
import { languageAtom } from "@core/atoms";
import { LANGUAGE_CONFIG } from "@core/configs";

type DictionaryKeys = keyof typeof dicts;

export const useLanguage = () => {
  const userLang = useAtomValue(languageAtom);

  const dictionary = useCallback(
    (word: DictionaryKeys, replacements?: Record<string, string>) => {
      if (!word) return "";

      let result =
        dicts?.[word]?.[userLang] ||
        dicts?.[word]?.[LANGUAGE_CONFIG.defaultLang as LanguageType] ||
        word;
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
