import { ResSignInType, SignInDataType, SignUpDataType } from "types/poop/auth.type";
import { DefaultInstance, AuthInstance } from "..";

const router = "/admin";

/** 회원가입 post api */
export const PostSignUp = async ({
  name,
  phone,
  account_id,
  password,
}: SignUpDataType) => {
  const res = await DefaultInstance.post(`${router}/signup`, {
    name,
    phone,
    account_id,
    password,
  });
  return res;
};

/** 로그인 post api */
export const PostSignIn = async ({
  account_id,
  password,
}: SignInDataType): Promise<ResSignInType> => {
  const { data } = await DefaultInstance.post(`${router}/signin`, {
    account_id,
    password,
  });
  return data;
};

/**병원 관계자 사진 등록 patch api */
export const PatchImage = async (hospital_image: string) => {
  const { data } = await AuthInstance.patch(`${router}/image`, {
    hospital_image,
  });
  return data;
};

/** 병원 관계자 정보 조회 get api*/
export const GetInfo = async () => {};

/** 병원 승인 요청 리스트 get api */
export const GetApprovalList = async () => {
  const { data } = await AuthInstance.get(`${router}/list`);
  return data;
};

/** 병원 승인 요청 상세보기 get api */
export const getApproval = async () => {};


/** 회원탈퇴 delete api */
export const DeleteSecession = async () => {};
