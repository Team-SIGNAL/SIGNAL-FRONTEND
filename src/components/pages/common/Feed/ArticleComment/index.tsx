import { Body, BodyLarge2 } from "styles/text";
import * as _ from "./style";
import { ArticleCommentProps } from "./type";
import ReportModal from "components/common/Report";

function ArticleComment({ writer, content, is_mine }: ArticleCommentProps) {
  const onDelete = () => {};
  return (
    <_.Container>
      <_.UserContainer>
        <BodyLarge2>{writer}</BodyLarge2>

        <_.ReportContainer>
          {is_mine ? <Body onClick={onDelete}>삭제하기</Body> : <ReportModal />}
        </_.ReportContainer>
      </_.UserContainer>
      <Body>{content}</Body>
    </_.Container>
  );
}

export default ArticleComment;
