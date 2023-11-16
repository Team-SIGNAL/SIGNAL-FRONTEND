/** 커뮤니티 피드 종류 */
export type FeedListTagType = "GENERAL" | "HOSPITAL" | "NOTIFICATION";

/** 커뮤니티 피드 리스트 목록 타입 */
export type FeedListType = {
  id: number; // feed list 고유 id
  title: string; // 제목
  image: string; // 이미지 url
  name: string; // 작성자 이름
  creat_date: string; // 작성 날자
};

/** 커뮤니티 피드 상세보기 타입 */
export type FeedDetailType = {
  img: string; // 이미지 url
  title: string; // 제목
  date: string; // 날짜
  writer: string; // 작성자
  content: string; // 내용
  profile: string; // 프로필 이미지 url
  isMine: boolean; // 내거인지 아닌지 boolean
};

/** 커뮤니티 댓글 타입 */
export type FeedCommentType = {
  content: string; // 내용
  writer: string; // 작성자 이름
  is_mine: boolean; // 내거인지 아닌지 boolean
  date_time: string; // 작성 날짜
  profile: string; // 프로필 이미지 url
};

/** 커뮤니티 피드 res 타입 */
export type FeedListResType = {
  feed_list: FeedListType[]; // 커뮤니티 목록 리스트
  page_total: number; // 마지막 페이지인지 확인
};

/** 커뮤니티 댓글 res 타입 */
export type FeedCommentResType = {
  comment: FeedCommentType[]; // 댓글
};

/** 커뮤니티 작성 req 타입 */
export type FeedWriteReqType = {
  title: string; // 제목
  content: string; // 내용
  image?: string; // 이미지 url
};

/** 커뮤니티 댓글 작성 req 타입 */
export type FeedCommentWriteType = {
  content: string; // 댓글 내용 작성
};
