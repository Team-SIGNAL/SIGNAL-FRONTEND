import { atom } from "recoil";

export const loginModalAtom = atom<boolean>({
  key: "loginModalAtom",
  default: false,
});

export const signupModalAtom = atom<boolean>({
  key: "signupModalAtom",
  default: false,
});
