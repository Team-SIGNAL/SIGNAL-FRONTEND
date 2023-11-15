/** 병원 관계자 승인 상태 */
export type AuthStatus = "VERIFIED" | "REFUSE" | "WAIT";

/** 회원가입 req 타입 */
export type SignUpReqType = {
  name: string; // 이름 //2 ~ 20
  phone: string; // 전화번호 //010-0000-0000
  account_id: string; // 계정 주소 //5 ~ 12
  password: string; // 비밀번호 //숫자', '영어', '특수문자' 무조건 1개 이상, 비밀번호 '최소 8자에서 최대 16자'까지 허용,
  address: string; // 주소
};

/** 로그인 req 타입 */
export type SignInReqType = {
  account_id: string; // 아이디
  password: string; // 비밀번호
};

/** 로그인 res 타입 */
export type SignInResType = {
  access_token: string; // access token
  refresh_token: string; // refresh token
  refresh_exp: string; // refresh token 만료시간
  access_exp: string; // access token 만료시간
  role: "ADMIN" | "HOSPITAL" | "NON_HOSPIAL"; // 어드민, 병원 관계자, 승인이 안된 병원 관계자
};

/** 병원 관계자 승인 요청 req 타입 */
export type ImageReqType = {
  hospital_image: string; // 이미지 url
};

/** 내 정보 조회 res 타입 */
export type InfoResType = {
  name: string; // 이름
  phone: string; // 전화번호
  profile: string; // 프로필 이미지 url
  request_status: AuthStatus; // 병원 인증 여부
};