import { atom } from "recoil";
import { RecWriteReqType } from "types/rec.type";

export const RecWriteAtom = atom<RecWriteReqType>({
  key: "recWrite",
  default: {
    title: "",
    content: "",
    link: "",
    image: "",
    category: "MUSIC",
  },
});
