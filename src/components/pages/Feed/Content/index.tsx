import { Body, Body2, TitleLarge } from "styles/text";
import * as _ from "./style";
import { useState } from "react";
import More from "assets/icon/more";
import Report from "assets/icon/report";

function Content() {
  const [feed, setFeed] = useState({
    img: "https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg",
    title: "이건 제목임",
    date: "2022-10-12",
    writer: "글쓴이",
    isMine: true,
    content:
      "이가나\n다라마바사가나다라마바사 가나다라마바사 가나\n다라마바사 가나다라마바사 가나다라마바사 가나\n\n\n다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가d나다라마바사가d나다라마바사가d나다라마바사가d나다라마바사가d나다라마바사가d나다라마바사 가나다라마바사  ",
  });
  return (
    <_.Container>
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
    </_.Container>
  );
}
export default Content;
