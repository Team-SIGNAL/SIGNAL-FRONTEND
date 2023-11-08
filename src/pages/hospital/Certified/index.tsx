import * as _ from "./style";
import UserInfo from "components/pages/Certified/UserInfo";
import SubmitDocument from "components/pages/Certified/SubmitDocument";

function Certified() {
  return (
    <_.FlexContainer>
      <_.Container>
        <UserInfo />
        <SubmitDocument />
      </_.Container>
    </_.FlexContainer>
  );
}

export default Certified;
