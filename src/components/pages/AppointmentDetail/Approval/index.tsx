import { Body2, Title, BodyStrong, BodyLarge } from "styles/text";
import * as _ from "./style";
import StateBadge from "../StateBadge";
import ReservationCheck from "../ReservationCheck";

function Approval() {
  return (
    <_.Container>
      <_.ApprovalContainer>
        <_.NameContainer>
          <div>
            <Title>홍길동</Title>
            <Body2>여 (16세)</Body2>
          </div>
          <div>
            <BodyLarge>17:00</BodyLarge>
            <StateBadge state="Approval" />
          </div>
        </_.NameContainer>
        <_.InformationTable>
          <BodyStrong>생년월일</BodyStrong>
          <Body2>2022-12-12</Body2>
          <BodyStrong>전화번호</BodyStrong>
          <Body2>010-1234-1234</Body2>
        </_.InformationTable>

        <_.ReasonContainer>
          <BodyStrong>사유</BodyStrong>
          <Body2>
            내가 아프다는데 너가 어쩔거냐고 내가 아픈게 병원 예약한 이유다.
            이딴것까지 써야함? 내가 아프다는데 너가 어쩔거냐고 내가 아픈게 병원
            예약한 이유다. 내가 아프다는데 너가 어쩔거냐고 내가 아픈게 병원
            예약한 이유다.
          </Body2>
        </_.ReasonContainer>
      </_.ApprovalContainer>
      <_.ApprovalContainer>
        <ReservationCheck />
      </_.ApprovalContainer>
    </_.Container>
  );
}

export default Approval;
