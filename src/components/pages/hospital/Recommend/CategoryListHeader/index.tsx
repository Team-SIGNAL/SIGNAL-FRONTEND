import { useNavigate } from "react-router-dom";
import * as _ from "./style";
import LeftArrow from "assets/icon/leftArrow";
import { Body2, BodyLarge } from "styles/text";
import { CategoryListHeaderProps } from "./type";
import Color from "styles/color";

function CategoryListHeader({ navURL, cat }: CategoryListHeaderProps) {
  const nav = useNavigate();
  const categoryName = {
    music: "🎵 음악 🎵",
    sport: "💪 운동 💪",
    video: "🎥 영상 🎥",
    hobby: "🧶 취미 🧶",
  };
  return (
    <_.HeadertContianer>
      <_.BackArrowContainer onClick={() => nav(navURL)}>
        <LeftArrow width="15px" color={Color.gray[400]} />
        <Body2>돌아가기</Body2>
      </_.BackArrowContainer>
      {!(cat in categoryName) ? (
        <BodyLarge>{cat}은 잘못된 카테고리입니다.</BodyLarge>
      ) : (
        <BodyLarge>{categoryName[cat as keyof typeof categoryName]}</BodyLarge>
      )}
    </_.HeadertContianer>
  );
}

export default CategoryListHeader;
