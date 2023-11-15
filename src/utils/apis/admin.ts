import {
  ImageReqType,
  InfoResType,
  SignInReqType,
  SignInResType,
  SignUpReqType,
} from "types/admin.type";
import { AuthInstance, DefaultInstance } from ".";

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
