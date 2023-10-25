import * as _ from "./style";
import Selector from "components/common/Selecter";
import { useLocation, useNavigate } from "react-router-dom";

function Search() {
  const nav = useNavigate();
  const { pathname } = useLocation();

  return (
    <_.Container>
      <Selector
        onChange={(e) => {
          nav(`${pathname}?tag=${e.target.value}`);
        }}
        option={["일반", "공지"]}
        value={["GENERAL", "NOTIFICATION"]}
      />
    </_.Container>
  );
}

export default Search;