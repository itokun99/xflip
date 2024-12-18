import { API_CONFIG } from "@core/configs";
import axios from "axios";
import {
  logRequest,
  logRequestError,
  logResponse,
  logResponseError,
} from "./utils";

export const api = axios.create({
  timeout: 60000,
  baseURL: API_CONFIG.baseUrl,
});

api.interceptors.request.use(logRequest, logRequestError);
api.interceptors.response.use(logResponse, logResponseError);
