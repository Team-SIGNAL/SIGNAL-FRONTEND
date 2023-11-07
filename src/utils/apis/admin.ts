import { AuthInstance } from "utils/apis";

const router = "/admin";

/** 병원 관계자 인증을 위한 이미지 등록 */
export const PatchHostpitalImg = async (hospital_image: string) => {
  const { data } = await AuthInstance.patch(`${router}/image`, {
    hospital_image,
  });
  return data;
};
