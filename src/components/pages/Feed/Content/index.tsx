import { Body, Body2, TitleLarge } from "styles/text";
import * as _ from "./style";
import More from "assets/icon/more";
import Report from "assets/icon/report";
import { useQuery } from "@tanstack/react-query";
import { GetFeed } from "utils/apis/feeds";
import { useLocation } from "react-router-dom";
import { FeedDataType } from "types/feed.type";
import Loading from "components/common/Loading";
import Error from "components/common/Error";

function Content() {
  const { pathname } = useLocation();
  const id = pathname.split("/")[3];

  const {
    isLoading,
    isError,
    data: feed,
  }: {
    isLoading: boolean;
    isError: boolean;
    data: FeedDataType | undefined;
  } = useQuery({
    queryKey: ["getFeed", { id }],
    queryFn: () => GetFeed({ id }),
    retryOnMount: false,
    retry: 1,
  });

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <Error />;
  } else {
    return (
      <_.Container>
        {feed && (
          <>
            <_.TitleContainer>
              <TitleLarge>{feed.title}</TitleLarge>
              {feed.isMine && (
                <div>
                  <More />
                  <Body2>{feed.date}</Body2>
                </div>
              )}
            </_.TitleContainer>
            {feed.img && <_.FeedImg src={feed.img} alt="feed Img" />}
            <_.FeedContent>{feed.content}</_.FeedContent>
            {!feed.isMine && (
              <_.ReportContainer>
                <Report />
                <Body>신고</Body>
              </_.ReportContainer>
            )}
          </>
        )}
      </_.Container>
    );
  }
}
export default Content;
