import {
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  format,
  isSameMonth,
  addDays,
} from "date-fns";
import * as _ from "./style";
import { CalendarCellsProps } from "./type";
import { SubTitle } from "styles/text";

function Cells({ currentMonth, onDateClick }: CalendarCellsProps) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;
      days.push(
        <_.Day
          state={
            !isSameMonth(day, monthStart)
              ? "disabled"
              : format(currentMonth, "M") !== format(day, "M")
              ? "not-valid"
              : "valid"
          }
          onClick={() => onDateClick(cloneDay)}
        >
          <_.Date
            className={
              format(currentMonth, "M") !== format(day, "M")
                ? "text not-valid"
                : ""
            }
          >
            <SubTitle>{formattedDate}</SubTitle>
            {/* {isSameMonth(day, monthStart) && (
              <_.ClinicContainer>
                <div>
                  <Body>진료신청</Body>
                  <Body>00개</Body>
                </div>
                <div>
                  <Body>진료예약</Body>
                  <Body>00개</Body>
                </div>
              </_.ClinicContainer>
            )} */}
          </_.Date>
        </_.Day>
      );
      day = addDays(day, 1);
    }
    rows.push(<_.Weeks className="row">{days}</_.Weeks>);
    days = [];
  }
  return <_.Container>{rows}</_.Container>;
}

export default Cells;
