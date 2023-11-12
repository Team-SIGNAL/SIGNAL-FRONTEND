import TextArea from "components/common/TextArea";
import * as _ from "./style";
import { useState } from "react";
import { Button } from "styles/button";
import Color from "styles/color";

function ReservationCheck() {
  const [reason, setReson] = useState("");

  return (
    <_.Container>
      <TextArea
        value={reason}
        placeholder="거절 선택시 사유를 입력해주세요."
        onChange={(e) => setReson(e.target.value)}
      />
      <_.ButtonContainer>
        <Button backColor={Color.gray[400]}>거절</Button>
        <Button>승인</Button>
      </_.ButtonContainer>
    </_.Container>
  );
}

export default ReservationCheck;
