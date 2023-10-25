import * as _ from "./style";
import Selector from "components/common/Selecter";
import { useNavigate } from "react-router-dom";

function Search() {
  const nav = useNavigate();

  return (
    <_.Container>
      <Selector
        onChange={(e: any) => {
          nav(`/hospital/feed?tag=${e.target.value}`);
        }}
        option={["일반", "공지"]}
        value={["GENERAL", "NOTIFICATION"]}
      />
    </_.Container>
  );
}

export default Search;
