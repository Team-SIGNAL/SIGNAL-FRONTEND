import { atom } from "recoil";

export const nowPathAtom = atom<string[]>({
  key: "nowPath",
  default: [],
});
