import { exprofileing } from "assets/index";
import * as S from "./style";
import { BodyLarge, Title } from "styles/text";
import { Button } from "styles/button";

function Profile() {
  return (
    <S.Container>
      <S.ProfileContainer>
        <img src={exprofileing} />
        <S.InfoContainer>
          <Title>가나다라 병원</Title>
          <BodyLarge>010-1234-1234</BodyLarge>
        </S.InfoContainer>
      </S.ProfileContainer>

      <Button>로그아웃</Button>
    </S.Container>
  );
}

export default Profile;
