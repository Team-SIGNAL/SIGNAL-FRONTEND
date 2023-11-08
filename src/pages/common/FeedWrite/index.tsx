import * as _ from "./style";
import Submit from "components/pages/FeedWrite/Submit";
import Content from "components/pages/FeedWrite/Content";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useLocation } from "react-router-dom";
import { FeedIdAtom } from "atoms/feed";

function FeedWrite() {
  const setFeedId = useSetRecoilState(FeedIdAtom);

  const { search } = useLocation();

  useEffect(() => {
    setFeedId(search.slice(4));
  }, [search, setFeedId]);

  return (
    <_.Container>
      <Content />
      <Submit />
    </_.Container>
  );
}

export default FeedWrite;
