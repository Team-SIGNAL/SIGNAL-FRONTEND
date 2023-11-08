import * as _ from "./style";
import UserInfo from "components/pages/hospital/Certified/UserInfo";
import SubmitDocument from "components/pages/hospital/Certified/SubmitDocument";

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
