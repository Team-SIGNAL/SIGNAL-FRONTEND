import { BodyStrong, SubTitle } from "styles/text";
import * as S from "./style";
import { exprofileing } from "assets/index";
function Sidebar() {
  let role = "user"; // api 연동시 이 부분 알려줄 예정
  return (
    <S.Container>
      <S.ProfileContainer>
        <img src={exprofileing} alt="profileImg" />
        <SubTitle>가나다라 병원</SubTitle>
      </S.ProfileContainer>
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
