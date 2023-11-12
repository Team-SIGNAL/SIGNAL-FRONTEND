import { getApprovalList } from "types/approval.type";
import { AuthInstance } from "utils/apis";

const router = "/admin";

/** 병원 관계자 인증을 위한 이미지 등록 */
export const PatchHostpitalImg = async (hospital_image: string) => {
  console.log("asdasd",hospital_image)
  const { data } = await AuthInstance.patch(`${router}/image`, {
    hospital_image,
  });
  return data;
};

/** 병원 승인 요청 리스트 */
export const GetApprovalList = async () => {
  const { data }: getApprovalList = await AuthInstance.get(`${router}/list`);
  return data;
};
