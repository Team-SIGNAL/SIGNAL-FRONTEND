import { atom } from "recoil";
import { SignInProps, SignUpProps, UserDataProps } from "./auth.type";

export const SignInAtom = atom<SignInProps>({
  key: "signInInputs",
  default: {
    account_id: "",
    password: "",
  },
});

export const SignUpAtom = atom<SignUpProps>({
  key: "signUpInputs",
  default: {
    name: "",
    phone: "",
    account_id: "",
    password: "",
  },
});

export const UserDataAtom = atom<UserDataProps>({
  key: "userDatas",
  default: {
    user_id: "",
  },
});
