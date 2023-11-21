import * as _ from "./style";
import { Button } from "styles/button";

import { useRecoilState } from "recoil";
import { RecWriteReqType } from "types/rec.type";
import { RecWriteAtom } from "atoms/rec";

function Submit() {

  const [data, setData] = useRecoilState<RecWriteReqType>(RecWriteAtom);


  const onClickSubmit = ()=>{

  }
  return <Button onClick={onClickSubmit}>추천 등록</Button>;
}

export default Submit;
