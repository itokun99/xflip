import { createJSONStorage } from "jotai/utils";
import { storage } from "../storage";

export const atomStorage = createJSONStorage(() => ({
  setItem: (key: string, value: string) => {
    storage.set(key, value);
    return Promise.resolve();
  },
  getItem: (key: string) => {
    return Promise.resolve(storage.get(key));
  },
  removeItem: (key: string) => {
    storage.remove(key);
    return Promise.resolve();
  },
}));
