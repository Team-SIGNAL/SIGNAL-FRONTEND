/** 병원 관계자 승인 res 타입 - admin */
export type ListResType = {
  approve_request_list: ApproveListType[]; // 병원 관계자 승인 리스트
};

/** 병원 관계자 승인 리스트 타입 - admin */
export type ApproveListType = {
  id: number; // 병원 승인 고유 id
  name: string; // 이음
  phone: string; // 전화번호
};

/** 병원 관계자 승인 디테일 타입 - admin */
export type ApproveDetailResType = {
  name: string; // 이름
  phone: string; // 전화번호
  address: string; // 주소
  hospital_image: string; // 뱡원 승인 이미지
  account_id: string; // 아이디
};
