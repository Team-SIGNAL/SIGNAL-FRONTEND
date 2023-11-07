import { SubTitle, BodyStrong, Body2 } from "styles/text";
import * as _ from "./style";

function UserInfo() {
  return (
    <_.Container>
      <SubTitle>기본정보</SubTitle>
      <_.InformationTable>
        <BodyStrong>병원이름</BodyStrong>
        <Body2>가나다라병원</Body2>
        <BodyStrong>전화번호</BodyStrong>
        <Body2>010-1234-1234</Body2>
        <BodyStrong>아이디</BodyStrong>
        <Body2>thisisid</Body2>
      </_.InformationTable>
    </_.Container>
  );
}

export default UserInfo;
