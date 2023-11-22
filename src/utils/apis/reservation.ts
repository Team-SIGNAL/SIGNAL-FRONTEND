import {
  CalendarListResType,
  CalendarResType,
  IsReservationType,
  ReservationDetailType,
} from "types/reservation.type";
import { AuthInstance } from ".";

const router = "/reservation";

/** 병원 예약 리스트 달력 - (date=(년-월-01)) */
export const GetCalendarListApi = async (
  date: string
): Promise<CalendarListResType> => {
  const { data }: { data: CalendarListResType } = await AuthInstance.get(
    `${router}/admin?date=${date}`
  );
  return data;
};

/** 병원 날짜별 예약 - (date) */
export const GetDateApi = async (date: string): Promise<CalendarResType> => {
  const { data }: { data: CalendarResType } = await AuthInstance.get(
    `${router}/admin?date=${date}`
  );
  return data;
};

/** 병원 예약 상세보기 - (reservationId) */
export const GetReservationDetailApi = async (
  reservationId: string
): Promise<ReservationDetailType> => {
  const { data }: { data: ReservationDetailType } = await AuthInstance.get(
    `${router}/admin/detail/${reservationId}`
  );
  return data;
};

/** 병원 예약 승인 거절 - (id, reservation_statue, reason) */
export const PatchReservationApi = async ({
  id,
  reservation_status,
  reason,
}: {
  id: string;
  reservation_status: IsReservationType;
  reason: string;
}) => {
  await AuthInstance.patch(`${router}/${id}`, { reservation_status, reason });
};
