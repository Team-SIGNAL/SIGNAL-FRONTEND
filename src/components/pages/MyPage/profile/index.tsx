import { exprofileing } from "assets/index";
import * as _ from "./style";
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
<<<<<<< HEAD
    <_.Container>
      <_.ProfileContainer>
        <img src={exprofileing} />
        <_.InfoContainer>
=======
    <S.Container>
      <S.ProfileContainer>
        <img src={exprofileing} alt="profile img" />
        <S.InfoContainer>
>>>>>>> develop
          <Title>가나다라 병원</Title>
          <BodyLarge>010-1234-1234</BodyLarge>
        </_.InfoContainer>
      </_.ProfileContainer>

      <Button onClick={logoutOnClick} backColor={Color.gray[300]} color={Color.gray[500]}>로그아웃</Button>
    </_.Container>
  );
}

export default Profile;
