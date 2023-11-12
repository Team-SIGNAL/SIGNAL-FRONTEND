import { BodyLarge2, SubTitle } from "styles/text";
import * as _ from "./style";
import { CategoryArticleProps } from "./type";
import { useNavigate } from "react-router-dom";

function CategoryArticle({ title, time, id, cat }: CategoryArticleProps) {
  const nav = useNavigate();

  return (
    <_.Container onClick={() => nav(`/hospital/rec/${id}?cat=${cat}`)}>
      <SubTitle>{title}</SubTitle>
      <BodyLarge2>{time}</BodyLarge2>
    </_.Container>
  );
}

export default CategoryArticle;
