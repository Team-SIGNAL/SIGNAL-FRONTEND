import * as _ from "./style";
import { BodyLarge, Title } from "styles/text";
import { Button } from "styles/button";
import { delCookie } from "utils/cookie";
import Color from "styles/color";
import { alertSuccess } from "utils/toastify";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { GetUserInfoApi } from "utils/apis/admin";
import Loading from "components/common/Loading";
import Error from "components/common/Error";
import { defaultProfileImg } from "assets/index";

function Profile() {
  const nav = useNavigate();
  const logoutOnClick = () => {
    delCookie("access_token");
    delCookie("refresh_token");
    alertSuccess("로그아웃되었습니다.");
    nav("/");
  };

  const {
    isLoading,
    isError,
    data: userInfo,
  } = useQuery({
    queryKey: ["getInfo"],
    queryFn: GetUserInfoApi,
    retry: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    <Loading />;
  } else if (isError) {
    <Error />;
  }
  return (
    <_.Container>
      <_.ProfileContainer>
        <img src={userInfo?.profile ?? defaultProfileImg} alt="profile img" />
        <_.InfoContainer>
          <Title>{userInfo?.name}</Title>
          <BodyLarge>{userInfo?.phone}</BodyLarge>
        </_.InfoContainer>
      </_.ProfileContainer>
      <Button
        width="fit-content"
        onClick={logoutOnClick}
        backColor={Color.gray[300]}
        color={Color.gray[500]}
      >
        로그아웃
      </Button>
    </_.Container>
  );
}

export default Profile;
