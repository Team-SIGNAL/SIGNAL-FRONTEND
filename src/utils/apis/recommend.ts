import {
  CategoryType,
  RecGetDetailReqType,
  RecGetListReqType,
  RecWriteReqType,
} from "types/rec.type";
import { AuthInstance } from ".";

const router = "/recommend";

/** 추천 작성 - (content={image, link?, title, content, category}) */
export const PostRecommendApi = async (recWrite: RecWriteReqType) => {
  await AuthInstance.post(`${router}`, recWrite);
};

/**추천 삭제 */
export const DeleteRecommendApi = async (id: string) => {
  await AuthInstance.delete(`${router}/${id}`);
};

/** 추천 상세보기 불러오기 */
export const GetRecommendDetailApi = async (
  id: string
): Promise<RecGetDetailReqType> => {
  const { data } = await AuthInstance.get(`${router}/${id}`);
  return data;
};

/** 추천 리스트 불러오기 */
export const GetRecommendListApi = async (
  category: CategoryType
): Promise<RecGetListReqType> => {
  const { data } = await AuthInstance.get(`${router}/list?category=${category.toUpperCase()}`);
  return data;
};
