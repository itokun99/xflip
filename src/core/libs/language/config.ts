import { dicts } from "./dicts";
import { LanguageType, defaultLanguage, languageAtom, languageStore } from ".";
import { getLocales } from "react-native-localize";

type DictionaryKeys = keyof typeof dicts;

export const getDictionary = (word: DictionaryKeys) => {
  const userLang = languageStore.get(languageAtom);
  if (!word) return "";
  return dicts?.[word]?.[userLang] || dicts?.[word]?.[defaultLanguage] || word;
};
