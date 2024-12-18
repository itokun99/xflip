import { BaseResponseModel } from "./http";

export interface LoginResponseModel extends BaseResponseModel {
  tbl0: LoginData[];
}

export interface LoginData {
  Result: string;
  Auth_ID: number;
  Plant_ID: number;
  Company_ID: number;
  Token: string;
}

export interface LoginResponseDataModel {
  token: string;
}

export interface LoginRequestModel {
  email: string;
  password: string;
}

export interface RegisterRequestModel {
  name: string;
  handphone: string;
  email: string;
  password: string;
  address: string;
}
