import * as _ from "./style";
import Content from "components/pages/common/Feed/Content";
import Comment from "components/pages/common/Feed/Comment";
function Feed() {
  return (
    <_.Container>
      <Content />
      <Comment/>
    </_.Container>
  );
}

export default Feed;
