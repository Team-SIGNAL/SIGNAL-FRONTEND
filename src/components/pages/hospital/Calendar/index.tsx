import { useEffect, useState } from "react";
import * as _ from "./style";
import Header from "./Header";
import { subMonths, addMonths, format } from "date-fns";
import Days from "./Days";
import Cells from "./Cells";
import { useNavigate } from "react-router-dom";

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const nav = useNavigate();

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nowMonth = () => {
    setCurrentMonth(new Date());
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const onDateClick = (day: Date) => {
    // TODO ::  이전달 / 다음달 클릭시 해당 달로 이동하기
    // if(getYear(day) > getYear(currentMonth) ||( getMonth(day) > getMonth(currentMonth) && getMonth(day) !== 11)){
    //   nextMonth();
    // }else if(getYear(day) < getYear(currentMonth) ||( getMonth(day) < getMonth(currentMonth) && getMonth(day) !== 0)){
    //   prevMonth();
    // }
    if (format(currentMonth, "M") === format(day, "M")) {
      nav(`/hospital/${format(day, "yyyy-MM-dd")}`);
    }
  };

  return (
    <_.Calendar>
      <Header
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        nowMonth={nowMonth}
      />
      <Days />
      <Cells currentMonth={currentMonth} onDateClick={onDateClick} />
    </_.Calendar>
  );
}

export default Calendar;
