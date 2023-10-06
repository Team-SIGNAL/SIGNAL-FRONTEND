import { DefaultInstance } from "utils/apis";
import { SignInAtom, SignUpAtom } from "atoms/auth";
import { useRecoilValue } from "recoil";

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
  const { name, phone, account_id, password } =
    useRecoilValue(SignUpAtom);
  const res = DefaultInstance.post(`${router}/signup`, {
    name,
    phone,
    account_id,
    password,
  });
  return (await res).data;
};
