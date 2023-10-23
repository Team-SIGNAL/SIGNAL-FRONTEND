import Input from "components/common/Input";
import * as _ from "./style";
import { useState } from "react";
import Selector from "components/common/Selecter";

function Search() {
  const [search, setSearch] = useState<string>("");

  return (
    <_.Container>
      <_.LeftContainer>
        <Input
          placeholder="검색"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </_.LeftContainer>
      <Selector
        option={["전체", "공지", "커뮤니티"]}
        value={["전체", "공지", "커뮤니티"]}
      />
    </_.Container>
  );
}

export default Search;
