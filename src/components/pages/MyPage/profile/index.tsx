import { exprofileing } from "assets/index";
import * as S from "./style";
import { BodyLarge, Title } from "styles/text";
import { Button } from "styles/button";
import { delCookie } from "utils/cookie";
import Color from "styles/color";
import { alertSuccess } from "utils/toastify";

function Profile() {
  const logoutOnClick = () => {
    delCookie("access_token");
    delCookie("refresh_token");
    alertSuccess("로그아웃되었습니다.");
  };
  return (
    <S.Container>
      <S.ProfileContainer>
        <img src={exprofileing} alt="profile img" />
        <S.InfoContainer>
          <Title>가나다라 병원</Title>
          <BodyLarge>010-1234-1234</BodyLarge>
        </S.InfoContainer>
      </S.ProfileContainer>

      <Button onClick={logoutOnClick} backColor={Color.gray[300]} color={Color.gray[500]}>로그아웃</Button>
    </S.Container>
  );
}

export default Profile;
