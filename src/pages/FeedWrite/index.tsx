import * as _ from "./style";
import Submit from "components/pages/FeedWrite/Submit";
import Content from "components/pages/FeedWrite/Content";

function FeedWrite() {
  return (
    <_.Container>
      <Content />
      <Submit />
    </_.Container>
  );
}

export default FeedWrite;
