import { useState } from "react";
import * as _ from "./style";
import { BodyStrong, SubTitle } from "styles/text";
import Input from "components/common/Input";
import ArticleComment from "../ArticleComment";
import { useQuery } from "@tanstack/react-query";
import { FeedCommentDataType } from "types/poop/feed.type";
import Loading from "components/common/Loading";
import Error from "components/common/Error";
import { getFeedComment } from "utils/apis/poop/feed";
import { useLocation } from "react-router-dom";

function Comment() {
  const [feedInput, setFeedInput] = useState<string>("");

  const { pathname } = useLocation();
  const id = pathname.split("/")[3];

  const {
    isLoading,
    data: feedComment,
    isError,
  }: {
    isLoading: boolean;
    isError: boolean;
    data: FeedCommentDataType[] | undefined;
  } = useQuery({
    queryKey: ["getFeedComment", { id }],
    queryFn: () => getFeedComment({ id }),
    retryOnMount: false,
    retry: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <Error />;
  } else {
    return (
      <_.Container>
        <_.TitleContainer>
          <SubTitle>댓글</SubTitle>
          <BodyStrong>{feedComment ? feedComment.length : 0}개</BodyStrong>
        </_.TitleContainer>
        <_.InputContainer>
          <Input
            value={feedInput}
            placeholder="댓글"
            onChange={(e) => setFeedInput(e.target.value)}
          />
          <_.CommentButton>등록</_.CommentButton>
        </_.InputContainer>
        {feedComment && (
          <>
            <_.CommentContainer>
              {feedComment.map((v) => (
                <ArticleComment {...v} />
              ))}
            </_.CommentContainer>
          </>
        )}
      </_.Container>
    );
  }
}

export default Comment;
