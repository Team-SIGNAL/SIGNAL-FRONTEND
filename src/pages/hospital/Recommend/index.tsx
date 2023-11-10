import Category from "components/pages/hospital/Recommend/Category";
import * as _ from "./style";
import { useSearchParams } from "react-router-dom";
import CategoryList from "components/pages/hospital/Recommend/CategoryList";

function Recommend() {
  const [seachParams] = useSearchParams();
  const cat = seachParams.get("cat");
  return (
    <_.Container>{cat ? <CategoryList cat={cat} /> : <Category />}</_.Container>
  );
}

export default Recommend;
