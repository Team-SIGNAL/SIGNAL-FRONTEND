import { Button } from "styles/button";
import * as _ from "./style";
import Color from "styles/color";

function Approve() {
  return (
    <_.Container>
      <_.ButtonContainer>
        <Button backColor={Color.gray[400]}>거절</Button>
        <Button>승인</Button>
      </_.ButtonContainer>
    </_.Container>
  );
}

export default Approve;
