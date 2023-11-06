import * as _ from "./style";
import { format } from "date-fns";
import { CalendarHeaderProps } from "./type";
import { Title, TitleLarge2 } from "styles/text";
import DateArrow from "components/common/DateArrow";

function Header({
  currentMonth,
  prevMonth,
  nextMonth,
  nowMonth,
}: CalendarHeaderProps) {
  return (
    <_.Conatainer>
      <_.MonthContainer>
        <TitleLarge2>{format(currentMonth, "M")}월</TitleLarge2>
        <Title>{format(currentMonth, "yyyy")}</Title>
      </_.MonthContainer>

      <DateArrow prev={prevMonth} now={nowMonth} next={nextMonth} />
    </_.Conatainer>
  );
}
export default Header;
