import { Body, Body2, TitleLarge } from "styles/text";
import * as _ from "./style";
import More from "assets/icon/more";
import Report from "assets/icon/report";
import { useQuery } from "@tanstack/react-query";
import { GetFeed } from "utils/apis/poop/feed";
import { useLocation } from "react-router-dom";
import { FeedDataType } from "types/poop/feed.type";
import Loading from "components/common/Loading";
import Error from "components/common/Error";
import ReportModal from "components/common/Report";

function Content() {
  const { pathname } = useLocation();
  const id = pathname.split("/")[3];

  const {
    isLoading,
    data: feed,
    isError,
  }: {
    isLoading: boolean;
    isError: boolean;
    data: FeedDataType | undefined;
  } = useQuery({
    queryKey: ["getFeed", { id }],
    queryFn: () => GetFeed({ id }),
    retryOnMount: false,
    retry: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const onUpdate = () => {};
  const onDelete = () => {};

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
                  <div>
                    <Body onClick={onUpdate}>수정</Body>
                    <Body onClick={onDelete}>삭제</Body>
                  </div>
                  <Body2>{feed.date}</Body2>
                </div>
              )}
            </_.TitleContainer>
            {feed.img && <_.FeedImg src={feed.img} alt="feed Img" />}
            <_.FeedContent>{feed.content}</_.FeedContent>
            {!feed.isMine && <ReportModal />}
          </>
        )}
      </_.Container>
    );
  }
}
export default Content;
