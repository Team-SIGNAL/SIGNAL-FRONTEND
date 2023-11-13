import { FeedCommentWriteType } from "./../../types/feed.type";
import {
  FeedCommentResType,
  FeedDetailType,
  FeedListResType,
  FeedListTagType,
  FeedWriteReqType,
} from "types/feed.type";
import { AuthInstance } from ".";

const router = "/feed";

/** 커뮤니티 목록 - 무한 스크롤  (tag,page,size) */
export const GetFeedListApi = async (
  tag: FeedListTagType,
  page: number,
  size: number
): Promise<FeedListResType> => {
  const { data }: { data: FeedListResType } = await AuthInstance.get(
    `${router}/list?tag=${tag}&page=${page}&size=${size}`
  );

  return data;
};

/** 커뮤니티 상세보기 - (feedId) */
export const GetFeedDetailApi = async (
  feedId: number
): Promise<FeedDetailType> => {
  const { data }: { data: FeedDetailType } = await AuthInstance.get(
    `${router}/${feedId}`
  );

  return data;
};

/** 커뮤니티 상세보기 댓글 - (feedId) */
export const GetFeedCommentListApi = async (
  feedId: number
): Promise<FeedCommentResType> => {
  const { data }: { data: FeedCommentResType } = await AuthInstance.get(
    `${router}/comment/${feedId}`
  );

  return data;
};

/** 어드민 커뮤니티 작성 - (feedContent={title, content, image}) */
export const PostAdminWriteApi = async (feedContent: FeedWriteReqType) => {
  await AuthInstance.post(`${router}/admin`, feedContent);
};

/** 어드민 커뮤니티 수정 - (feedId, feedContent={title, content, image}) */
export const PatchFeedUpdateApi = async (
  feedId: number,
  feedContent: FeedWriteReqType
) => {
  await AuthInstance.patch(`${router}/${feedId}`, feedContent);
};

/** 커뮤니티 댓글 작성 - (feedId, feedComment={content}) */
export const PostFeedCommentWriteApi = async (
  feedId: number,
  feedComment: FeedCommentWriteType
) => {
  await AuthInstance.post(`${router}/comment/${feedId}`, feedComment);
};
