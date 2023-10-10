import { AuthInstance, DefaultInstance } from "utils/apis";
import { SignInAtom, SignUpAtom, UserDataAtom } from "atoms/auth";
import { useRecoilValue } from "recoil";
import { getCookie } from "utils/cookie";
import axios from "axios";
import { AUTH_URL } from "constants/config";

const router = "/users";

export const PostSignIn = async () => {
  const { account_id, password } = useRecoilValue(SignInAtom);
  const res = DefaultInstance.post(`${router}/signin`, {
    account_id,
    password,
  });
  return (await res).data;
};

export const PostSignUp = async () => {
  const { name, phone, account_id, password } = useRecoilValue(SignUpAtom);
  const res = DefaultInstance.post(`${router}/signup`, {
    name,
    phone,
    account_id,
    password,
  });
  return (await res).data;
};

export const DeleteSecession = async () => {
  const { user_id } = useRecoilValue(UserDataAtom);

  AuthInstance.delete(`${router}/secession/${user_id}`);
};

export const PutLogin = async () => {
  const refreshToken = getCookie("refresh_token");

  const res = axios.put(`${AUTH_URL}${router}/login`, {
    headers: {
      "Refresh-Token": `Bearer ${refreshToken}`,
    },
  });

  return res;
};
