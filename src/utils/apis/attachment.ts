import { postImageFileResType } from "types/attachment.type";
import { AuthInstance } from ".";

const router = "/attachment";

/** 이미지 업로드 axios prop */
export const postImage = async (formData: FormData) => {
  const { data }: postImageFileResType = await AuthInstance.post(
    `${router}/`,
    formData
  );
  return data;
};
