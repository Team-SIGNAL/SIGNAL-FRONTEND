import { atom } from "recoil";
import { UserIdType } from "./user.type";

/** 유저 구분을 기억하기 위한 유저 id */
export const UseIdAtom = atom<UserIdType>({
  key: "userId",
  default: "",
});