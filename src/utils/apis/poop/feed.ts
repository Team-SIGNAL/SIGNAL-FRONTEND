import {
  GetFeedCommentResType,
  GetFeedDataResType,
  GetFeedDataType,
  GetFeedListDataResType,
  GetFeedListDataType,
  PostFeed,
} from "types/poop/feed.type";
import { AuthInstance } from "..";

const router = "/feed";

/** 커뮤니티 목록 get api */
export const GetFeedList = async ({ tag, pagenum }: GetFeedListDataType) => {
  const { data }: GetFeedListDataResType = await AuthInstance.get(
    `/${router}/list?tag=${tag}&pagenum=${pagenum}&num=10`
  );
  return data;
};

/** 커뮤니티 상세보기 get api */
export const GetFeed = async ({ id }: GetFeedDataType) => {
  const { data }: GetFeedDataResType = await AuthInstance.get(
    `${router}/${id}`
  );
  return data;
};

/** 커뮤니티 댓글 get api */
export const getFeedComment = async ({ id }: GetFeedDataType) => {
  const { data }: GetFeedCommentResType = await AuthInstance.get(
    `${router}/comment/${id}`
  );
  return data;
};

/** 어드민 커뮤니티 작성 post api */
export const postFeed = async ({ title, content, image }: PostFeed) => {
  const { data } = await AuthInstance.post(`${router}/`, {
    title,
    content,
    image,
  });
  return data;
};

/** 커뮤니티 수정 patch api */
export const patchUpdateFeed = async ({ title, content, image, id }: PostFeed) => {
  const { data } = await AuthInstance.post(`${router}/${id}`, {
    title,
    content,
    image,
  });
  return data;
};
