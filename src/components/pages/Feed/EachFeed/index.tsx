import { summaryDefaultImg } from "assets/index";
import * as _ from "./style";
import { Body2, BodyLarge2 } from "styles/text";
import { EachFeedProps } from "./type";

function EachFeed({ summary, title, date }: EachFeedProps) {
  return (
    <_.Container>
      <_.SummaryImg src={summary ? summary : summaryDefaultImg} />
      <Body2>{date}</Body2>
      <BodyLarge2>{title}</BodyLarge2>
    </_.Container>
  );
}

export default EachFeed;
