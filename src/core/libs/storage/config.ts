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

const AsyncStorage = appStorage;

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
    AsyncStorage.set(key, encrypt(jsonStringify(data)));
  }
};

const get = (key: string) => {
  const value = AsyncStorage.getString(key);

  if (typeof value === "undefined") {
    return value;
  }
  const _data = jsonParse(decrypt(value));

  return _data?.data;
};

const getAll = () => {
  const keys = AsyncStorage.getAllKeys?.();
  const temp: any = {};
  keys.forEach(k => {
    if (k) {
      const v = get(k);
      temp[k as keyof typeof temp] = v;
    }
  });
  return temp;
};

const removeSingle = (key: string) => AsyncStorage.delete(key);

const removeMultiply = (k: string[]) => {
  k.forEach(key => AsyncStorage.delete(key));
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
  clearAll: () => AsyncStorage.clearAll(),
};

// export const reduxStorage = {
//   setItem: (key: string, value: any) => {
//     storage.set(key, value);
//     return Promise.resolve(true);
//   },
//   getItem: (key: string) => {
//     const value = storage.get(key);
//     return Promise.resolve(value);
//   },
//   removeItem: (key: string) => {
//     storage.remove(key);
//     return Promise.resolve();
//   },
// };
