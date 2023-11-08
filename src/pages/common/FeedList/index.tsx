import * as _ from "./style";
import Search from "components/pages/common/FeedList/Search";
import List from "components/pages/common/FeedList/List";

function FeedList() {
  return (
    <_.Container>
      <Search />
      <List />
    </_.Container>
  );
}
export default FeedList;
