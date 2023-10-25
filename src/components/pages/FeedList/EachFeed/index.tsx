import { summaryDefaultImg } from "assets/index";
import * as _ from "./style";
import { Body2, BodyLarge2 } from "styles/text";
import { EachFeedProps } from "./type";
import { useNavigate } from "react-router-dom";

function EachFeed({ img, title, date, id, user }: EachFeedProps) {
  const nav = useNavigate();

  return (
    <_.Container onClick={() => nav(`/hospital/feed/${id}`)}>
      <_.SummaryImg src={img ? img : summaryDefaultImg} />
      <div>
        <Body2>{date}</Body2>
        <Body2>{user}</Body2>
      </div>
      <BodyLarge2>{title}</BodyLarge2>
    </_.Container>
  );
}

export default EachFeed;
