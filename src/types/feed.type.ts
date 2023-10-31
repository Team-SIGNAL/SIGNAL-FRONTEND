/** axios prop 커뮤니티 목록 */
export type GetFeedListDataType = {
  pagenum: number;
  tag: string;
};

/** axios prop 커뮤니티 */
export type GetFeedDataType = {
  id: string;
};

/** axios res 커뮤니티 */
export type GetFeedDataResType = {
  data: { feed: FeedDataType };
};

/** axios res 커뮤니티 목록 */
export type GetFeedListDataResType = {
  data: { feed: FeedListDataType[]; total: number };
};

/** 커뮤니티 피드 */
export type FeedDataType = {
  img: string | null;
  title: string;
  date: string;
  writer: string;
  isMine: boolean;
  content: string;
};

/** 커뮤니티 피드 목록 */
export type FeedListDataType = {
  img: string | null;
  title: string;
  date: string;
  user: string;
  id: number;
};
