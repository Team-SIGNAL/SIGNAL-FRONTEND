import { useLocation, useSearchParams } from "react-router-dom";
import * as _ from "./style";
import DetailHeader from "components/pages/hospital/RecommendDetail/DetailHeader";
import Content from "components/pages/hospital/RecommendDetail/Content";

function RecommendDetail() {
  const { pathname } = useLocation();
  const [searchParam] = useSearchParams();
  const cat = searchParam.get("cat");
  const id = pathname.split("/")[3];

  return (
    <_.Container>
      <DetailHeader cat={cat} />
      <Content id={id}/>
    </_.Container>
  );
}

export default RecommendDetail;
