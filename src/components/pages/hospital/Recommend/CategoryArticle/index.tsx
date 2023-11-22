import * as _ from "./style";
import { SubTitle } from "styles/text";
import { CategoryArticleProps } from "./type";
import { useNavigate } from "react-router-dom";

function CategoryArticle({ title, id, cat, image }: CategoryArticleProps) {
  const nav = useNavigate();

  return (
    <_.Container onClick={() => nav(`/hospital/rec/${id}?cat=${cat}`)}>
      <_.Image src={image} />
      <SubTitle>{title}</SubTitle>
    </_.Container>
  );
}

export default CategoryArticle;
