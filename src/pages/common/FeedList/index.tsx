import * as _ from "./style";
import Search from "components/pages/FeedList/Search";
import List from "components/pages/FeedList/List";

function FeedList() {
  return (
    <_.Container>
      <Search />
      <List />
    </_.Container>
  );
}
export default FeedList;
