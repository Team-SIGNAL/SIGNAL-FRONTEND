import * as _ from "./style";
import Selector from "components/common/Selecter";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "styles/button";
import Color from "styles/color";

function Search() {
  const nav = useNavigate();
  const { pathname, search } = useLocation();

  return (
    <_.Container>
      <Button
        width="fit-content"
        backColor={Color.gray[400]}
        onClick={() => nav(`${pathname}/write`)}
      >
        작성
      </Button>
      <Selector
        onChange={(e) => {
          nav(`${pathname}?tag=${e.target.value}`);
        }}
        option={["일반", "병원", "공지"]}
        value={["GENERAL", "HOSPITAL", "NOTIFICATION"]}
        selected={search.split("=")[1] ?? "GENERAL"}
      />
    </_.Container>
  );
}

export default Search;
