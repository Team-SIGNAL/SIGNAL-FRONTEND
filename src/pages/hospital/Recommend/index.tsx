import Category from "components/pages/hospital/Recommend/Category";
import * as _ from "./style";
import { useLocation } from "react-router-dom";
import CategoryList from "components/pages/hospital/Recommend/CategoryList";

function Recommend() {
  const { search } = useLocation();
  const cat = search.slice(5);
  return (
    <_.Container>
      {search.slice(5) ? <CategoryList cat={cat} /> : <Category />}
    </_.Container>
  );
}

export default Recommend;
