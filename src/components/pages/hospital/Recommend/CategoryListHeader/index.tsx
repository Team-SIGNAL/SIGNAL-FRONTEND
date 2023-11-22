import { useNavigate } from "react-router-dom";
import * as _ from "./style";
import { BodyLarge } from "styles/text";
import { CategoryListHeaderProps } from "./type";

function CategoryListHeader({ cat }: CategoryListHeaderProps) {
  const nav = useNavigate();
  const categoryName = {
    music: "🎵 음악 🎵",
    sport: "💪 운동 💪",
    video: "🎥 영상 🎥",
    hobby: "🧶 취미 🧶",
  };
  return (
    <_.HeadertContianer>
      {!(cat in categoryName) ? (
        <BodyLarge>{cat}은 잘못된 카테고리입니다.</BodyLarge>
      ) : (
        <BodyLarge>{categoryName[cat as keyof typeof categoryName]}</BodyLarge>
      )}
    </_.HeadertContianer>
  );
}

export default CategoryListHeader;
