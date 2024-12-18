import { LoginRequestModel, LoginResponseModel } from "@core/models/auth";
import { storage } from "@features/_global/libs/storage";

const TOKEN_KEY = "XFuVXTsDe2GE73JPjifH";
const USERINFO_KEY = "BZHptTc3BUxDgYfYx2n3";
const ABSENMASUK_KEY = "7chjsjrj0kck9XTMGbuN";
const ABSENPULANG_KEY = "DA7NzjfiVogawLrCFwWz";

// user data
export const getUserDataFromStorage = () =>
  storage.get(USERINFO_KEY) as LoginResponseModel["tbl0"][0];
export const saveUserDataToStorage = (data: LoginResponseModel["tbl0"][0]) =>
  storage.set(USERINFO_KEY, data);
export const deleteUserDataStorage = () => storage.remove(USERINFO_KEY);

// user token
export const saveTokenToStorage = (data: string) =>
  storage.set(TOKEN_KEY, data);
export const getTokenFromStorage = () => storage.get(TOKEN_KEY) as string;
export const deleteTokenFromStorage = () => storage.remove(TOKEN_KEY);

export * from "./form";
