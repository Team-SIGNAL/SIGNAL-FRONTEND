import { atom } from "recoil";

/** 유저 구분을 기억하기 위한 유저 id */
export const UseIdAtom = atom<string>({
  key: "userId",
  default: "",
});