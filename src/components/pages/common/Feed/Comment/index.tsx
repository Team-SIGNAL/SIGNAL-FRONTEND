import * as _ from "./style";
import { useState } from "react";
import { BodyStrong, SubTitle } from "styles/text";
import Input from "components/common/Input";
import ArticleComment from "../ArticleComment";
import { useMutation, useQuery } from "@tanstack/react-query";
import Loading from "components/common/Loading";
import Error from "components/common/Error";
import { useLocation } from "react-router-dom";
import { alertError } from "utils/toastify";
import {
  GetFeedCommentListApi,
  PostFeedCommentWriteApi,
} from "utils/apis/comment";

function Comment() {
  const [feedInput, setFeedInput] = useState<string>("");

  const { pathname } = useLocation();
  const id = pathname.split("/")[3];

  const {
    isLoading,
    data: feedComment,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["getFeedComment", id],
    queryFn: () => GetFeedCommentListApi(id),
    retry: 0,
    select: (data) => data.comment_list,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const { mutate: postFeedMutate } = useMutation(PostFeedCommentWriteApi, {
    onSuccess: () => {
      refetch();
      setFeedInput("");
    },
    onError: () => {
      alertError("댓글 작성에 실패하였습니다.");
    },
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
              feedId: id,
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
