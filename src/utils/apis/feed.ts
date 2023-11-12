import {
  GetFeedCommentResType,
  GetFeedDataResType,
  GetFeedDataType,
  GetFeedListDataResType,
  GetFeedListDataType,
  PostFeed,
} from "types/feed.type";
import { AuthInstance } from ".";

const router = "/feed";

export const GetFeedList = async ({ tag, pagenum }: GetFeedListDataType) => {
  const { data }: GetFeedListDataResType = await AuthInstance.get(
    `/${router}/list?tag=${tag}&pagenum=${pagenum}&num=10`
  );
  return data;
};

export const GetFeed = async ({ id }: GetFeedDataType) => {
  const { data }: GetFeedDataResType = await AuthInstance.get(
    `${router}/${id}`
  );
  return data;
};

export const getFeedComment = async ({ id }: GetFeedDataType) => {
  const { data }: GetFeedCommentResType = await AuthInstance.get(
    `${router}/${id}`
  );
  return data;
};

export const postFeed = async ({ title, content, image }: PostFeed) => {
  const { data } = await AuthInstance.post(`${router}/`, {
    title,
    content,
    image,
  });
  return data;
};

export const patchUpdateFeed = async ({ title, content, image, id }: PostFeed) => {
  const { data } = await AuthInstance.post(`${router}/${id}`, {
    title,
    content,
    image,
  });
  return data;
};
