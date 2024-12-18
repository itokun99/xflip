export interface BaseResponseModel<Data = any> {
  code: string;
  status: number;
  message: string;
  data?: Data;
  error?: any;
}
