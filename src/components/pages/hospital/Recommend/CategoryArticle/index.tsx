import * as _ from "./style";
import { SubTitle } from "styles/text";
import { CategoryArticleProps } from "./type";
import { useNavigate } from "react-router-dom";
import { summaryDefaultImg } from "assets/index";

function CategoryArticle({ title, id, cat, image }: CategoryArticleProps) {
  const nav = useNavigate();

  return (
    <_.Container onClick={() => nav(`/hospital/rec/${id}?cat=${cat}`)}>
     <_.Image src={image ?? summaryDefaultImg} />
      <SubTitle>{title}</SubTitle>
    </_.Container>
  );
}

export default CategoryArticle;
