import * as _ from "./style";
import LeftArrow from "assets/icon/leftArrow";
import RightArrow from "assets/icon/rightArrow";
import { DateArrowProps } from "./type";

function DateArrow({ prev, now, next }:DateArrowProps) {
  return (
    <_.ArrowContainer>
      <button onClick={prev}>
        <LeftArrow />
      </button>
      <button onClick={now}>오늘</button>
      <button onClick={next}>
        <RightArrow />
      </button>
    </_.ArrowContainer>
  );
}

export default DateArrow;
