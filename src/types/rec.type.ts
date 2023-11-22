/** 추천 카테고리 */
export type CategoryType = "SPORT" | "VIDEO" | "MUSIC" | "HOBBY";

/** 추천 작성 type */
export type RecWriteReqType = {
  title: string;
  content: string;
  link: string;
  image: string;
  category: CategoryType;
};

/** 추천 상세보기 type */
export type RecGetDetailReqType = {
  title: string;
  image?: string;
  content: string;
  link?: string;
  name: string;
  profile: string;
  create_date: string;
};

export type RecArticletListReqType = {
  title: string;
  image: string;
  content: string;
  id: string;
};

export type RecGetListReqType = {
  recommend_list: RecArticletListReqType[];
};
