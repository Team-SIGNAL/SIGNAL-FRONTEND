import { FeedCommentResType, FeedCommentWriteType } from "types/comment.type";
import { AuthInstance } from ".";

const router = "/comment"
/** 커뮤니티 댓글 작성 - (feedId, feedComment={content}) */
export const PostFeedCommentWriteApi = async ({
  feedId,
  feedComment,
}: {
  feedId: number;
  feedComment: FeedCommentWriteType;
}) => {
  await AuthInstance.post(`${router}/admin/${feedId}`, feedComment);
};

/** 커뮤니티 상세보기 댓글 - (feedId) */
export const GetFeedCommentListApi = async (
  feedId: number
): Promise<FeedCommentResType> => {
  const { data }: { data: FeedCommentResType } = await AuthInstance.get(
    `${router}/${feedId}`
  );

  return data;
};