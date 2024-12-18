import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

// Fungsi untuk log request
export const logRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  console.log("=== Request ===");
  console.log(`URL: ${config.url}`);
  console.log(`Method: ${config.method?.toUpperCase()}`);
  console.log("Headers:", config.headers.toJSON());
  if (config.data) {
    console.log("Data:", JSON.stringify(config.data)); // Menampilkan data request sebagai string JSON
  }
  if (config.params) {
    console.log("Params:", JSON.stringify(config.params)); // Menampilkan params sebagai string JSON
  }
  console.log("================");
  return config;
};

// Fungsi untuk menangani error request
export const logRequestError = (error: AxiosError): Promise<any> => {
  console.log("Request Error:", error);
  return Promise.reject(error);
};

// Fungsi untuk log response
export const logResponse = (response: AxiosResponse): AxiosResponse => {
  console.log("=== Response ===");
  console.log(`URL: ${response.config.url}`);
  console.log(`Status: ${response.status} ${response.statusText}`);
  console.log("Data:", JSON.stringify(response.data)); // Menampilkan data response sebagai string JSON
  console.log("================");

  return response;
};

export const logResponseError = (error: any): Promise<any> => {
  if (error.response) {
    console.log("=== Response Error ===");
    console.log(`URL: ${error.response.config.url}`);
    console.log(
      `Status: ${error.response.status} ${error.response.statusText}`,
    );
    console.log("Data:", JSON.stringify(error.response.data)); // Menampilkan error data response sebagai string JSON
    console.log("====================");
  } else {
    console.log("Network/Server Error:", error.message);
  }
  return Promise.reject(error);
};
