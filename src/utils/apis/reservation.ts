import {
  CalendarListResType,
  CalendarResType,
  ReservationDetailType,
} from "types/reservation.type";
import { AuthInstance } from ".";

const router = "/reservation";

/** 병원 예약 리스트 달력 - (date=(년-월-01)) */
export const GetCalendarListApi = async (
  date: string
): Promise<CalendarListResType> => {
  const { data }: { data: CalendarListResType } = await AuthInstance.get(
    `${router}/list?date=${date}`
  );
  return data;
};

/** 병원 날짜별 예약 - (date) */
export const GetDateApi = async (date: string): Promise<CalendarResType> => {
  const { data }: { data: CalendarResType } = await AuthInstance.get(
    `${router}/date=${date}`
  );
  return data;
};

/** 병원 예약 상세보기 - (reservationId) */
export const GetReservationDetailApi = async (
  reservationId: number
): Promise<ReservationDetailType> => {
  const { data }: { data: ReservationDetailType } = await AuthInstance.get(
    `${router}/${reservationId}`
  );
  return data;
};
