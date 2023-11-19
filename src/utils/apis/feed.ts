import {
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
  const { data } = await AuthInstance.get(
    `${router}/admin/list?tag=${tag}&page=${page}&size=${size}`
  );

  return data;
};

/** 커뮤니티 상세보기 - (feedId) */
export const GetFeedDetailApi = async (
  feedId: number
): Promise<FeedDetailType> => {
  const { data }: { data: FeedDetailType } = await AuthInstance.get(
    `${router}/admin/${feedId}`
  );

  return data;
};

/** 어드민 커뮤니티 작성 - (feedContent={title, content, image}) */
export const PostAdminWriteApi = async (feedContent: FeedWriteReqType) => {
  await AuthInstance.post(`${router}/admin`, feedContent);
};

/** 어드민 커뮤니티 수정 - (feedId, feedContent={title, content, image}) */
export const PatchFeedUpdateApi = async ({
  feedId,
  feedContent,
}: {
  feedId: number;
  feedContent: FeedWriteReqType;
}) => {
  await AuthInstance.patch(`${router}/${feedId}`, feedContent);
};
