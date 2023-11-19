import { RecWriteReqType } from "types/rec.type";
import { AuthInstance } from ".";

const router = "/recommend";

/** 추천 작성 - (content={image, link?, title, content}) */
export const PostRecommend = async (content: RecWriteReqType) => {
  await AuthInstance.post(`${router}`, content);
};
