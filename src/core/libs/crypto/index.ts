import { CRYPTO_CONFIG } from "@core/configs";

export const encrypt = (data: string) => {
  return CryptoJS.AES.encrypt(data, CRYPTO_CONFIG.key).toString();
};

export const decrypt = (data: string) => {
  const decrData = CryptoJS.AES.decrypt(data, CRYPTO_CONFIG.key);
  return decrData.toString(CryptoJS.enc.Utf8);
};
