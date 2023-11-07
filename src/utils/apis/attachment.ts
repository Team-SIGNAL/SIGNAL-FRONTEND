import {
  patchImageFileResType,
} from "types/attachment.type";
import { AuthInstance } from ".";

const router = "/attachment";

/** 이미지 업로드 axios prop */
export const patchImage = async (formData: FormData) => {
  const { data }: patchImageFileResType = await AuthInstance.patch(
    `${router}/`,
    formData
  );
  return data;
};
