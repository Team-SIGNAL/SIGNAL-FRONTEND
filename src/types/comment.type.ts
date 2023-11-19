/** 커뮤니티 댓글 타입 */
export type FeedCommentType = {
  content: string; // 내용
  writer: string; // 작성자 이름
  create_date_time: string; // 작성 날짜
  profile: string; // 프로필 이미지 url
};

/** 커뮤니티 댓글 res 타입 */
export type FeedCommentResType = {
  comment_list: FeedCommentType[]; // 댓글
};

/** 커뮤니티 댓글 작성 req 타입 */
export type FeedCommentWriteType = {
  content: string; // 댓글 내용 작성
};
