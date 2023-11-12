import { AttachmentResType } from "./../../types/attachment.type";
import { AuthInstance } from ".";

const router = "/attachment";
export const PostImageAxios = async (imgMultipart: FormData) => {
  const { data }: { data: AttachmentResType } = await AuthInstance.post(
    `${router}/`,
    { imgMultipart }
  );
  return data;
};
