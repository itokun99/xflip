import { dicts } from "./dicts";
import { defaultLanguage, languageAtom, languageStore } from ".";

type DictionaryKeys = keyof typeof dicts;

export const getDictionary = (word: DictionaryKeys) => {
  const userLang = languageStore.get(languageAtom);
  if (!word) return "";
  return dicts?.[word]?.[userLang] || dicts?.[word]?.[defaultLanguage] || word;
};
