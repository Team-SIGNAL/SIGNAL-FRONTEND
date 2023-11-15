import { ApproveDetailResType, ListResType } from "types/hospitalAuth";
import { AuthInstance } from ".";
import { AuthStatus } from "types/admin.type";

const router = "hospital-auth";

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

export const PatchHospitalAuth = async (auth_status: AuthStatus) => {
  await AuthInstance.patch(`${router}/auth`, {
    auth_status,
  });
};
