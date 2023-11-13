export type IsReservationType = "STAND_BY" | "APPROVE" | "REFUSE";
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
  id: number;
  name: string;
  birth: string;
  dateTime: string;
  is_reservation: IsReservationType;
};

/** 예약 상세보기 res 타입 */
export type ReservationDetailType = {
  name: string;
  birth: string;
  dateTime: string;
  phone: string;
  gender: "MAN" | "WOMAN";
  is_reservation: IsReservationType;
  reason: string;
};
