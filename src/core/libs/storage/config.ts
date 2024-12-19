import { STORAGE_CONFIG } from "@core/configs";
import { decrypt, encrypt } from "@core/libs/crypto";
import { MMKV } from "react-native-mmkv";

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

export const appStorage = new MMKV({
  id: `${STORAGE_CONFIG.prefix}-${STORAGE_CONFIG.dir}`,
  encryptionKey: `${STORAGE_CONFIG.encryptionKey}`,
});

const set = (key: string, value: any) => {
  let data;
  switch (typeof value) {
    case "string":
      data = { data: value, typeData: "string" };
      break;
    case "object":
      data = { data: value, typeData: "object" };
      break;
    case "number":
      data = { data: value, typeData: "number" };
      break;
    case "boolean":
      data = { data: value, typeData: "boolean" };
      break;
  }

  if (data) {
    appStorage.set(key, encrypt(jsonStringify(data)));
  }
};

const get = (key: string) => {
  const value = appStorage.getString(key);

  if (typeof value === "undefined") {
    return value;
  }
  const _data = jsonParse(decrypt(value));

  return _data?.data;
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

export const asyncStorage = {
  setItem: (key: string, value: any) => {
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
