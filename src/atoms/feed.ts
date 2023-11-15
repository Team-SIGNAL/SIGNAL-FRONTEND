import { atom } from "recoil";

export const FeedTitleAtom = atom<string>({
  key: "feedTitle",
  default: "",
});
export const FeedContentAtom = atom<string>({
  key: "feedContent",
  default: "",
});
export const FeedImageAtom = atom<File | null>({
  key: "feedImage",
  default: undefined,
});
export const FeedIdAtom = atom<string>({
  key: "feedId",
  default: "",
});
