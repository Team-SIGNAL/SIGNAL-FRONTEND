import { Body, BodyLarge2 } from "styles/text";
import * as _ from "./style";
import { EachCommentProps } from "./type";
import Report from "assets/icon/report";
import More from "assets/icon/more";

function EachComment({ writer, content, isMine }: EachCommentProps) {
  return (
    <_.Container>
      <_.UserContainer>
        <BodyLarge2>{writer}</BodyLarge2>

        <_.ReportContainer>
          {isMine ? (
            <More />
          ) : (
            <>
              <Report />
              <Body>신고</Body>
            </>
          )}
        </_.ReportContainer>
      </_.UserContainer>
      <Body>{content}</Body>
    </_.Container>
  );
}

export default EachComment;