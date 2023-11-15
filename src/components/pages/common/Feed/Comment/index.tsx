import * as _ from "./style";
import { useState } from "react";
import { BodyStrong, SubTitle } from "styles/text";
import Input from "components/common/Input";
import ArticleComment from "../ArticleComment";
import { useMutation, useQuery } from "@tanstack/react-query";
import Loading from "components/common/Loading";
import Error from "components/common/Error";
import { useLocation } from "react-router-dom";
import {
  GetFeedCommentListApi,
  PostFeedCommentWriteApi,
} from "utils/apis/feed";

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
    data: { writer: string; content: string; is_mine: boolean }[] | undefined;
  } = useQuery({
    queryKey: ["getFeedComment", id],
    queryFn: () => GetFeedCommentListApi(Number(id)),
    retryOnMount: false,
    retry: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const { mutate: postFeedMutate } = useMutation(PostFeedCommentWriteApi, {
    onSuccess: () => {},
    onError: () => {},
  });

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <Error />;
  }
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
        <_.CommentButton
          disabled={!feedInput.length}
          onClick={() =>
            postFeedMutate({
              feedId: Number(id),
              feedComment: { content: feedInput },
            })
          }
        >
          등록
        </_.CommentButton>
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

export default Comment;
