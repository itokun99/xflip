import { CRYPTO_CONFIG } from "@core/configs";
import cryptoJs from "crypto-js";

export const encrypt = (data: string) => {
  return cryptoJs.AES.encrypt(data, CRYPTO_CONFIG.key).toString();
};

export const decrypt = (data: string) => {
  const decrData = cryptoJs.AES.decrypt(data, CRYPTO_CONFIG.key);
  return decrData.toString(cryptoJs.enc.Utf8);
};
