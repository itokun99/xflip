import { Clipboard } from "@core/packages";
import { useAlert } from "./use-alert";

export const useClipboard = () => {
  const copy = (s: string) => {
    Clipboard.setString(s);
  };

  const getContent = () => {
    return Clipboard.getString();
  };

  return {
    copy,
    getContent,
  };
};
