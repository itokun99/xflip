import { STORAGE_CONFIG } from "@core/configs";
import { decrypt, encrypt } from "@core/libs";
import { RNMMKV } from "@core/packages";

export const jsonStringify = (data: any) => {
  try {
    return JSON.stringify(data);
  } catch (err) {
    return data;
  }
};

export const jsonParse = (data: any) => {
  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};

export const appStorage = new RNMMKV.MMKV({
  id: `${STORAGE_CONFIG.prefix}-${STORAGE_CONFIG.dir}`,
  encryptionKey: `${STORAGE_CONFIG.encryptionKey}`,
});

const set = (key: string, value: string) => {
  if (value) {
    appStorage.set(key, encrypt(value));
  }
};

const get = (key: string): string | null => {
  const value = appStorage.getString(key);
  if (typeof value === "undefined") {
    return null;
  }
  const data = decrypt(value);
  return data;
};

const getAll = () => {
  const keys = appStorage.getAllKeys?.();
  const temp: any = {};
  keys.forEach(k => {
    if (k) {
      const v = get(k);
      temp[k as keyof typeof temp] = v;
    }
  });
  return temp;
};

const removeSingle = (key: string) => appStorage.delete(key);

const removeMultiply = (k: string[]) => {
  k.forEach(key => appStorage.delete(key));
};

const remove = (k: string | string[]) => {
  typeof k === "string"
    ? removeSingle(k as string)
    : removeMultiply(k as string[]);
};

export const storage = {
  set,
  get,
  getAll,
  remove,
  clearAll: () => appStorage.clearAll(),
};

// standar storage model by rn community
export const asyncStorage = {
  setItem: (key: string, value: string) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: string) => {
    const value = storage.get(key);
    return Promise.resolve(value);
  },
  removeItem: (key: string) => {
    storage.remove(key);
    return Promise.resolve();
  },
};
