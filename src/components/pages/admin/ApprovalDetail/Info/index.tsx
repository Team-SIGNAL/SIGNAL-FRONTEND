import { BodyStrong, Body2 } from "styles/text";
import * as _ from "./stlye";

function Info() {
  const hospital = {
    name: "민채병원",
    phone: "010-1234-1234",
    address: "대전광역시 유성구 가정북로 76 우정관 택배택배함배함함",
    hospital_image: "https://t1.daumcdn.net/cfile/tistory/2156EC4C5672AA5C13",
    account_id: "thisisid",
  };

  return (
    <_.Container>
      <_.InformationTable>
        <div>
          <BodyStrong>병원 이름</BodyStrong>
          <Body2>{hospital.name}</Body2>
          <BodyStrong>병원 전화번호</BodyStrong>
          <Body2>{hospital.phone}</Body2>
          <BodyStrong>병원 주소</BodyStrong>
          <Body2>{hospital.address}</Body2>
          <BodyStrong>아이디</BodyStrong>
          <Body2>{hospital.account_id}</Body2>
        </div>
        <hr />
        <_.Image src={hospital.hospital_image} />
      </_.InformationTable>
    </_.Container>
  );
}

export default Info;
