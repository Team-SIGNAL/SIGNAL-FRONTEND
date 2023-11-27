import { Body2, Title } from "styles/text";
import * as _ from "./style";
import { GetRecommendDetailApi } from "utils/apis/recommend";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { ContentProps } from "./type";

function Content({ id }: ContentProps) {
  console.log(id);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["GetFeedListApi", id],
    queryFn: () => GetRecommendDetailApi(id!),
    retry: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return (
    <_.Container>
      {data && (
        <>
          <_.EctContainer>
            {data.image && <_.Image src={data.image} />}

            <div>
              {data.link && (
                <_.LinkButton to={data.link}>
                  <Body2>🔗 링크</Body2>
                </_.LinkButton>
              )}
            </div>
          </_.EctContainer>
          <_.ContentContainer>
            <div>
              <Title>{data.title}</Title>
              <Body2>{data.create_date}</Body2>
            </div>
            <_.Content>{data.content}</_.Content>
          </_.ContentContainer>
        </>
      )}
    </_.Container>
  );
}

export default Content;
