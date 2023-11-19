import { Body, BodyLarge2 } from "styles/text";
import * as _ from "./style";
import { ArticleCommentProps } from "./type";

function ArticleComment({ writer, content }: ArticleCommentProps) {
  return (
    <_.Container>
      <_.UserContainer>
        <BodyLarge2>{writer}</BodyLarge2>
      </_.UserContainer>
      <Body>{content}</Body>
    </_.Container>
  );
}

export default ArticleComment;
