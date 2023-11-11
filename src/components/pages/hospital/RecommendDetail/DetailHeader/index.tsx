import LeftArrow from "assets/icon/leftArrow";
import * as _ from "./style";
import Color from "styles/color";
import { Body2 } from "styles/text";
import { useNavigate } from "react-router-dom";
import { DetailHeaderProps } from "./type";

function DetailHeader({ cat }: DetailHeaderProps) {
  const nav = useNavigate();
  return (
    <_.Container onClick={() => nav(`/hospital/rec?cat=${cat}`)}>
      <LeftArrow width="15px" color={Color.gray[400]} />
      <Body2>돌아가기</Body2>
    </_.Container>
  );
}

export default DetailHeader;
