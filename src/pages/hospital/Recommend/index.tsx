import Category from "components/pages/hospital/Recommend/Category";
import * as _ from "./style";
import { useNavigate, useSearchParams } from "react-router-dom";
import CategoryList from "components/pages/hospital/Recommend/CategoryList";
import { Button } from "styles/button";
import Color from "styles/color";

function Recommend() {
  const [seachParams] = useSearchParams();
  const cat = seachParams.get("cat");
  const nav = useNavigate();
  return (
    <_.Container>
      <Button
        width="fit-content"
        backColor={Color.gray[400]}
        onClick={() => nav(`hospital/rec/write`)}
      >
        작성
      </Button>
      <Category />
      {cat && <CategoryList cat={cat} />}
    </_.Container>
  );
}

export default Recommend;
