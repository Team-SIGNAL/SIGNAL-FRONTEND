import axios from "axios";
import { AUTH_URL } from "constants/config";
import { getCookie } from "utils/cookie";
import { ResSignInType, SignInDataType, SignUpDataType } from "types/auth.type";
import { AuthInstance, DefaultInstance } from ".";

const router = "/admin";

/** 로그인 api */
export const PostSignIn = async ({
  account_id,
  password,
}: SignInDataType): Promise<ResSignInType> => {
  const { data } = await DefaultInstance.post(`${router}/signin`, {
    account_id,
    password,
  });
  return data;
};

/** 병원 관계자 회원가입 api */
export const PostSignUp = async ({
  name,
  phone,
  account_id,
  password,
}: SignUpDataType) => {
  const res = await DefaultInstance.post(`${router}/signup`, {
    name,
    phone,
    account_id,
    password,
  });
  return res;
};

/** 회원탈퇴 */
export const DeleteSecession = async (user_id: string) => {
  const res = await AuthInstance.delete(`${router}/secession/${user_id}`);
  return res;
};

/** 토큰 재발급 */
export const PutLogin = async () => {
  const refreshToken = getCookie("refresh_token");

  const res = await axios.put(`${AUTH_URL}${router}/login`, {
    headers: {
      "Refresh-Token": `Bearer ${refreshToken}`,
    },
  });

  return res;
};
