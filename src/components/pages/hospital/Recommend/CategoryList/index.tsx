import * as _ from "./style";
import { CategoryListProps } from "./type";
import CategoryArticle from "../CategoryArticle";
import CategoryListHeader from "../CategoryListHeader";

function CategoryList({ cat }: CategoryListProps) {
  return (
    <_.Container>
      <CategoryListHeader navURL={`/hospital/rec`} cat={cat} />
      <_.ListContainer>
        <CategoryArticle
          time="3분 28초"
          title="나무 - 카더가든"
          id={1}
          cat={cat}
        />
      </_.ListContainer>
    </_.Container>
  );
}

export default CategoryList;
