import * as _ from "./style";
import Color from "styles/color";
import { CategoryListProps } from "./type";
import { Body2, BodyLarge } from "styles/text";
import LeftArrow from "assets/icon/leftArrow";
import { useNavigate } from "react-router-dom";
import CategoryArticle from "../CategoryArticle";

function CategoryList({ cat }: CategoryListProps) {
  const nav = useNavigate();
  const categoryName = {
    music: "🎵 음악 🎵",
    sport: "💪 운동 💪",
    video: "🎥 영상 🎥",
    hobby: "🧶 취미 🧶",
  };
  if (!(cat in categoryName)) {
    return (
      <_.Container>
        <_.HeadertContianer>
          <_.BackArrowContainer onClick={() => nav("/hospital/rec")}>
            <LeftArrow width="15px" color={Color.gray[400]} />
            <Body2>돌아가기</Body2>
          </_.BackArrowContainer>
          <BodyLarge>{cat}은 잘못된 카테고리입니다.</BodyLarge>
        </_.HeadertContianer>
      </_.Container>
    );
  } else {
    return (
      <_.Container>
        <_.HeadertContianer>
          <_.BackArrowContainer onClick={() => nav("/hospital/rec")}>
            <LeftArrow width="15px" color={Color.gray[400]} />
            <Body2>돌아가기</Body2>
          </_.BackArrowContainer>
          <BodyLarge>
            {categoryName[cat as keyof typeof categoryName]}
          </BodyLarge>
        </_.HeadertContianer>
        <_.ListContainer>
          <CategoryArticle time="3분 28초" title="나무 - 카더가든" id={1} />
        </_.ListContainer>
      </_.Container>
    );
  }
}
export default CategoryList;
