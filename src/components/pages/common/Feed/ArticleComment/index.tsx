import { Body, BodyLarge2 } from "styles/text";
import * as _ from "./style";
import { ArticleCommentProps } from "./type";
import { defaultProfileImg } from "assets/index";
import ProfileImg from "components/common/ProfileImg";

function ArticleComment({ name, content, profile }: ArticleCommentProps) {
  return (
    <_.Container>
      <_.UserContainer>
        <ProfileImg image={profile}/>
        <BodyLarge2>{name}</BodyLarge2>
      </_.UserContainer>
      <Body>{content}</Body>
    </_.Container>
  );
}

export default ArticleComment;
