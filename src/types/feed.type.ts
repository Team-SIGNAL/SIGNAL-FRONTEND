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
  image: string; // 이미지 url
  title: string; // 제목
  create_date: string; // 날짜
  writer: string; // 작성자
  content: string; // 내용
  profile: string; // 프로필 이미지 url
  mine: boolean; // 내거인지 아닌지 boolean
  id: number;
};

/** 커뮤니티 피드 res 타입 */
export type FeedListResType = {
  feed_list: FeedListType[]; // 커뮤니티 목록 리스트
  page_total: number; // 마지막 페이지인지 확인
};

/** 커뮤니티 작성 req 타입 */
export type FeedWriteReqType = {
  title: string; // 제목
  content: string; // 내용
  image?: string; // 이미지 url
};
