import * as _ from "./style";
import { CategoryListProps } from "./type";
import CategoryArticle from "../CategoryArticle";
import CategoryListHeader from "../CategoryListHeader";
import { useQuery } from "@tanstack/react-query";
import { GetRecommendListApi } from "utils/apis/recommend";
import { CategoryType } from "types/rec.type";
import Loading from "components/common/Loading";
import Error from "components/common/Error";
import { BodyLarge } from "styles/text";

function CategoryList({ cat }: CategoryListProps) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["GetRecommendListApi", cat],
    queryFn: () => GetRecommendListApi(cat as CategoryType),
    retry: 0,
    select: (data) => data.recommend_list,
  });

  if (isLoading) <Loading />;
  else if (isError) <Error />;
  return (
    <_.Container>
      <CategoryListHeader cat={cat} />
      <_.ListContainer>
        {data?.length ? data?.map((v) => (
          <CategoryArticle
            title={v.title}
            id={v.id}
            cat={cat}
            image={v.image}
          />
        )): <BodyLarge>추천 리스트가 존재하지 않습니다.</BodyLarge>}
      </_.ListContainer>
    </_.Container>
  );
}

export default CategoryList;
