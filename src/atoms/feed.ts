import { atom } from "recoil";

export const FeedTitleAtom = atom<string>({
  key: "feedTitle",
  default: "",
});
export const FeedContentAtom = atom<string>({
  key: "feedContent",
  default: "",
});
