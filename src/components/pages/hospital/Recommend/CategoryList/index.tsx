import * as _ from "./style";
import Color from "styles/color";
import { CategoryListProps } from "./type";
import { Body2 } from "styles/text";
import LeftArrow from "assets/icon/leftArrow";
import { useNavigate } from "react-router-dom";

function CategoryList({ cat }: CategoryListProps) {
  const nav = useNavigate();

  return (
    <_.Container>
      <_.BackArrowContainer onClick={() => nav("/hospital/rec")}>
        <LeftArrow width="15px" color={Color.gray[400]} />
        <Body2>돌아가기</Body2>
      </_.BackArrowContainer>

      
    </_.Container>
  );
}
export default CategoryList;
