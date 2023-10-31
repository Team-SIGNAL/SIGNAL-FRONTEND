/** 로그인시 필요한 데이터 */
export type SignInDataType = {
  account_id: string;
  password: string;
};

/** 회원가입시 필요한 ㄷ이터 */
export type SignUpDataType = {
  name: string;
  phone: string;
  account_id: string;
  password: string;
};

/** axios res data type   로그인 */
export type ResSignInType = {
  access_token: string;
  refresh_token: string;
  expire_at: string;
  role: "ADMIN" | "HOSPITAL";
};