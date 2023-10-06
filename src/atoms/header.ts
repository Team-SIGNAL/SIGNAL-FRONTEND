import { atom } from "recoil";

export const signInModalAtom = atom<boolean>({
  key: "signInModalAtom",
  default: false,
});

export const signupModalAtom = atom<boolean>({
  key: "signupModalAtom",
  default: false,
});
