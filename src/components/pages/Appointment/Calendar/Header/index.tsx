import * as _ from "./style";
import { format } from "date-fns";
import { CalendarHeaderProps } from "./type";
import LeftArrow from "assets/icon/leftArrow";
import RightArrow from "assets/icon/rightArrow";
import { Title, TitleLarge2 } from "styles/text";

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

      <_.ArrowContainer>
        <button onClick={prevMonth}>
          <LeftArrow />
        </button>
        <button onClick={nowMonth}>오늘</button>
        <button onClick={nextMonth}>
          <RightArrow />
        </button>
      </_.ArrowContainer>
    </_.Conatainer>
  );
}
export default Header;
