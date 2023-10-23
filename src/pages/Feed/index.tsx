import * as _ from "./style";
import Search from "components/pages/Feed/Search";
import List from "components/pages/Feed/List";

function Feed() {
  return (
    <_.Container>
      <Search />
      <List />
    </_.Container>
  );
}
export default Feed;
