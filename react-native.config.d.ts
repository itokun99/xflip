declare module "react-native-config" {
  export interface NativeConfig {
    HOSTNAME?: string;

    BE_API_HOST?: string;
    BE_API_ENDPOINT?: string;

    BE_API_DATA_PARAMS_LOGIN_KEY?: string;
    BE_API_DATA_PARAMS_AUTH_EMAIL_KEY?: string;
    BE_API_DATA_PARAMS_AUTH_EMAIL_VALUE?: string;
    BE_API_DATA_PARAMS_AUTH_PASS_KEY?: string;
    BE_API_DATA_PARAMS_AUTH_PASS_VALUE?: string;
    BE_API_DATA_PARAMS_APPKEY_KEY?: string;
    BE_API_DATA_PARAMS_APPKEY_VALUE?: string;

    BE_API_DATA_PARAMS_MAIN_MENU_KEY?: string;
    BE_API_DATA_PARAMS_PLAN_ID_KEY?: string;
    BE_API_DATA_PARAMS_PLAN_ID_VALUE?: string;
    BE_API_DATA_PARAMS_COMPANY_ID_KEY?: string;
    BE_API_DATA_PARAMS_COMPANY_ID_VALUE?: string;
    BE_API_DATA_PARAMS_AUTH_ID_KEY?: string;
    BE_API_DATA_PARAMS_AUTH_ID_VALUE?: string;

    GUEST_BEARER?: string;
    GUEST_AUTH_ID_VALUE?: string;

    STORAGE_PREFIX_ID?: string;
    STORAGE_USER_DIR?: string;
    STORAGE_DIR?: string;
    STORAGE_ENCRYPT_KEY?: string;
    STORAGE_MODE?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
