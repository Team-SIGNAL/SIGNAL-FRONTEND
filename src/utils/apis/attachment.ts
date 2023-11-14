import { AttachmentResType } from "./../../types/attachment.type";
import { AuthInstance } from ".";

const router = "/attachment";

/** 사진 등록 url */
export const PostImageApi = async (imgMultipart: FormData) => {
  const { data }: { data: AttachmentResType } = await AuthInstance.post(
    `${router}/`,
    imgMultipart
  );
  return data;
};
