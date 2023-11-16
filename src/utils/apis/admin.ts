import {
  ImageReqType,
  InfoResType,
  PatchHospitalAuthReqType,
  SignInReqType,
  SignInResType,
  SignUpReqType,
} from "types/admin.type";
import { AuthInstance, DefaultInstance } from ".";
import { ApproveDetailResType, ListResType } from "types/hospitalAuth";

const router = "/admin";

/** 병원 관계자 회원가입 - (userData={name, phone, accound_id, password, address}) */
export const PostSignUpApi = async (userData: SignUpReqType) => {
  await DefaultInstance.post(`${router}/signup`, userData);
};

/** 병원 관계자 로그인 - (userData={}) */
export const PostSignInApi = async (
  userData: SignInReqType
): Promise<SignInResType> => {
  const { data }: { data: SignInResType } = await DefaultInstance.post(
    `${router}/signin`,
    userData
  );
  return data;
};

/** 병원 관계자 사진 인증 - (Image={hosptial_image}) */
export const PatchImageApi = async (Image: ImageReqType) => {
  await AuthInstance.patch(`${router}/image`, Image);
};

/** 유저 정보 조회 */
export const GetUserInfoApi = async (): Promise<InfoResType> => {
  const { data }: { data: InfoResType } = await AuthInstance.get(
    `${router}/info`
  );
  return data;
};

/** 계정 삭제 */
export const DeleteAccountApi = async () => {
  await AuthInstance.delete(`${router}/secession`);
};

/** 병원관계자 승인 리스트 목록 */
export const GetHospitalListApi = async (): Promise<ListResType> => {
  const { data }: { data: ListResType } = await AuthInstance.get(
    `${router}/list`
  );
  return data;
};

/** 병원관계자 승인 상세보기 - (hospitalId) */
export const GetHospitalDetailApi = async (
  hospitalId: number
): Promise<ApproveDetailResType> => {
  const { data }: { data: ApproveDetailResType } = await AuthInstance.get(
    `${router}/${hospitalId}`
  );
  return data;
};

/** 병원 관계자 승인 */
export const PatchHospitalAuth = async ({
  id,
  auth_status,
}: PatchHospitalAuthReqType) => {
  await AuthInstance.patch(`${router}/auth/${id}`, {
    auth_status,
  });
};
