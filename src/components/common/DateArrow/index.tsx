import * as _ from "./style";
import LeftArrow from "assets/icon/leftArrow";
import RightArrow from "assets/icon/rightArrow";
import { DateArrowProps } from "./type";

function DateArrow({ prev, now, next }: DateArrowProps) {
  return (
    <_.ArrowContainer>
      <_.ArrowButton onClick={prev}>
        <LeftArrow />
      </_.ArrowButton>
      <_.TodayButton onClick={now}>오늘</_.TodayButton>
      <_.ArrowButton onClick={next}>
        <RightArrow />
      </_.ArrowButton>
    </_.ArrowContainer>
  );
}

export default DateArrow;
