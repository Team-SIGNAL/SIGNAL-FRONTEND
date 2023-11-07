import { patchHospitalFileProps } from "types/attachment.type";
import { AuthInstance } from ".";

const router = "/attachment";

/** 병원 관계자 승인 axios prop */
export const patchHospitalFile = async ({
  formData,
}: patchHospitalFileProps) => {
  const { data } = await AuthInstance.patch(`${router}/`, formData);
  return data;
};
