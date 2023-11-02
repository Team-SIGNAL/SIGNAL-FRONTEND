import { useEffect, useState } from "react";
import * as _ from "./style";
import Header from "./Header";
import { subMonths, addMonths, getMonth } from "date-fns";
import Days from "./Days";
import Cells from "./Cells";

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

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
    if (getMonth(currentMonth) < getMonth(day)) {
      setCurrentMonth(addMonths(currentMonth, 1));
      alert(getMonth(currentMonth)+1);
    } else if (getMonth(currentMonth) > getMonth(day)) {
      setCurrentMonth(subMonths(currentMonth, 1));
      alert(getMonth(currentMonth)+1);
    } else {
      alert(getMonth(day));
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
