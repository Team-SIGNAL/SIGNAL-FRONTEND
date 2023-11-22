export type IsReservationType = "WAIT" | "APPROVE" | "REFUSE";
/** 예약 캘린더 res 타입 */
export type CalendarListResType = {
  reservation_list: ReservationCalendarType[];
};

/** 예약 캘린더 목록 타입 */
export type ReservationCalendarType = {
  date: string;
  apply: number;
  appointment: number;
};

/** 예약 상세보기 res 타입 */
export type CalendarResType = {
  appointment_list: ReservationType[];
};

/** 예약 상세보기 콕록 타입 */
export type ReservationType = {
  id: string;
  name: string;
  birth: string;
  date: string;
  reservation_status: IsReservationType;
  time: string;
};

/** 예약 상세보기 res 타입 */
export type ReservationDetailType = {
  name: string;
  birth: string;
  date: string;
  phone: string;
  gender: "MAN" | "WOMAN";
  reservation_status: IsReservationType;
  reason: string;
  time: string;
};
