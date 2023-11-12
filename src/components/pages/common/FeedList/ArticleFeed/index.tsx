import { summaryDefaultImg } from "assets/index";
import * as _ from "./style";
import { Body2, BodyLarge2 } from "styles/text";
import { useLocation, useNavigate } from "react-router-dom";
import { FeedListDataType } from "types/poop/feed.type";

function ArticleFeed({ img, title, date, id, user }: FeedListDataType) {
  const nav = useNavigate();
  const { pathname } = useLocation();

  return (
    <_.Container onClick={() => nav(`${pathname}/${id}`)}>
      <_.SummaryImg src={img ? img : summaryDefaultImg} />
      <div>
        <Body2>{date}</Body2>
        <Body2>{user}</Body2>
      </div>
      <BodyLarge2>{title}</BodyLarge2>
    </_.Container>
  );
}

export default ArticleFeed;
