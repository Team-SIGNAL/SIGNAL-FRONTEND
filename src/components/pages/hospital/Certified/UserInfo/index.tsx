import { SubTitle, BodyStrong, Body2 } from "styles/text";
import * as _ from "./style";
import { UserInfoProps } from "./type";

function UserInfo({ name, phone }: UserInfoProps) {
  return (
    <_.Container>
      <SubTitle>기본정보</SubTitle>
      <_.InformationTable>
        <BodyStrong>병원이름</BodyStrong>
        <Body2>{name}</Body2>
        <BodyStrong>전화번호</BodyStrong>
        <Body2>{phone}</Body2>
      </_.InformationTable>
    </_.Container>
  );
}

export default UserInfo;
