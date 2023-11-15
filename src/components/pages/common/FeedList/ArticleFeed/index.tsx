import { summaryDefaultImg } from "assets/index";
import * as _ from "./style";
import { Body2, BodyLarge2 } from "styles/text";
import { useLocation, useNavigate } from "react-router-dom";
import { FeedListType } from "types/feed.type";

function ArticleFeed({ image, title, creat_date, id, name }: FeedListType) {
  const nav = useNavigate();
  const { pathname } = useLocation();

  return (
    <_.Container onClick={() => nav(`${pathname}/${id}`)}>
      <_.SummaryImg src={image ? image : summaryDefaultImg} />
      <div>
        <Body2>{creat_date}</Body2>
        <Body2>{name}</Body2>
      </div>
      <BodyLarge2>{title}</BodyLarge2>
    </_.Container>
  );
}

export default ArticleFeed;
