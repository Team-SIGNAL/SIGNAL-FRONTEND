import { postImageFileResType } from "types/poop/attachment.type";
import { AuthInstance } from "..";

const router = "/attachment";

/** 파일 업로드 post api */
export const postImage = async (formData: FormData) => {
  const { data }: postImageFileResType = await AuthInstance.post(
    `${router}/`,
    formData
  );
  return data;
};
