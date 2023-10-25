import { useState } from "react";
import * as _ from "./style";
import { BodyStrong, SubTitle } from "styles/text";
import Input from "components/common/Input";
import EachComment from "../EachComment";

function Comment() {
  const [feedComment, setFeedComment] = useState([
    {
      writer: "댓글작성자",
      content:
        "댓글내용 어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
      isMine: true,
    },
    {
      writer: "댓글작성자",
      content: "댓글내용 어쩌구저쩌구",
      isMine: false,
    },
    {
      writer: "댓글작성자",
      content: "댓글내용 어쩌구저쩌구",
      isMine: false,
    },{
      writer: "댓글작성자",
      content: "댓글내용 어쩌구저쩌구",
      isMine: false,
    },{
      writer: "댓글작성자",
      content: "댓글내용 어쩌구저쩌구",
      isMine: false,
    },{
      writer: "댓글작성자",
      content: "댓글내용 어쩌구저쩌구",
      isMine: false,
    },{
      writer: "댓글작성자",
      content: "댓글내용 어쩌구저쩌구",
      isMine: false,
    },{
      writer: "댓글작성자",
      content: "댓글내용 어쩌구저쩌구",
      isMine: false,
    },{
      writer: "댓글작성자",
      content: "댓글내용 어쩌구저쩌구",
      isMine: false,
    },{
      writer: "댓글작성자",
      content: "댓글내용 어쩌구저쩌구",
      isMine: false,
    },{
      writer: "댓글작성자",
      content: "댓글내용 어쩌구저쩌구",
      isMine: false,
    },{
      writer: "댓글작성자",
      content: "댓글내용 어쩌구저쩌구",
      isMine: false,
    },
  ]);
  const [feedInput, setFeedInput] = useState<string>("");

  return (
    <_.Container>
      <_.TitleContainer>
        <SubTitle>댓글</SubTitle>
        <BodyStrong>{feedComment.length}개</BodyStrong>
      </_.TitleContainer>
      <_.InputContainer>
        <Input
          value={feedInput}
          placeholder="댓글"
          onChange={(e) => setFeedInput(e.target.value)}
        />
        <_.CommentButton>등록</_.CommentButton>
      </_.InputContainer>
      <_.CommentContainer>
        {feedComment.map((v) => (
          <EachComment {...v} />
        ))}
      </_.CommentContainer>
    </_.Container>
  );
}

export default Comment;
