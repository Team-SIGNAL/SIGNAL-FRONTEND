import { Body2, Title } from "styles/text";
import * as _ from "./style";
import { GetRecommendDetailApi } from "utils/apis/recommend";
import { useQuery } from "@tanstack/react-query";
import { ContentProps } from "./type";

function Content({ id }: ContentProps) {
  const { data } = useQuery({
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
                <_.VideoPlayer>
                  <_.LinkButton to={data.link}>
                    <Body2>🔗 링크</Body2>
                  </_.LinkButton>
                  {!data.image && data.link.split("/")[2].split(".")[1] === "youtube" && (
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${
                        data.link.split("/")[3].split("=")[1]
                      }`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                  )}
                </_.VideoPlayer>
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
