import { BodyStrong, SubTitle } from "styles/text";
import * as S from "./style";
import ProfileImg from "assets/exprofileimg.png";

function Sidebar() {
  let role = "user";
  return (
    <S.Container>
      <S.ProfileContainer>
        <img src={ProfileImg} alt="profileImg" />
        <SubTitle>가나다라 병원</SubTitle>
      </S.ProfileContainer>
      <S.Line />
      {role === "user" ? (
        <>
          <S.MenuContainer>
            <BodyStrong>Menu</BodyStrong>
            <div>
              <S.Menus select={true}>
                <BodyStrong>메뉴</BodyStrong>
              </S.Menus>
              <S.Menus select={false}>
                <BodyStrong>커뮤니티</BodyStrong>
              </S.Menus>
              <S.Menus select={false}>
                <BodyStrong>추천</BodyStrong>
              </S.Menus>
            </div>
          </S.MenuContainer>
          <S.MenuContainer>
            <BodyStrong>User</BodyStrong>
            <div>
              <S.Menus select={false}>
                <BodyStrong>병원 정보</BodyStrong>
              </S.Menus>
            </div>
          </S.MenuContainer>
        </>
      ) : (
        <S.MenuContainer>
          <BodyStrong>Menu</BodyStrong>
          <div>
            <S.Menus select={true}>
              <BodyStrong>계정 승인</BodyStrong>
            </S.Menus>
            <S.Menus select={false}>
              <BodyStrong>커뮤니티</BodyStrong>
            </S.Menus>
          </div>
        </S.MenuContainer>
      )}
    </S.Container>
  );
}

export default Sidebar;
