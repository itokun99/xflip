import { LANGUAGE_CONFIG } from "@core/configs";
import { LanguageType } from "@core/libs";
import { atomWithStorage } from "@core/packages";

export const languageAtom = atomWithStorage(
  "user-language",
  LANGUAGE_CONFIG.defaultLang as LanguageType,
);
