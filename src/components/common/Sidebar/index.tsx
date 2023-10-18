import { BodyStrong, SubTitle } from "styles/text";
import * as _ from "./style";
import { exprofileing } from "assets/index";
function Sidebar() {
  let role = "user";
  return (
    <_.Container>
      <_.ProfileContainer>
        <img src={exprofileing} alt="profileImg" />
        <SubTitle>가나다라 병원</SubTitle>
      </_.ProfileContainer>
      {role === "user" ? (
        <>
          <_.MenuContainer>
            <BodyStrong>Menu</BodyStrong>
            <div>
              <_.Menus select={true}>
                <BodyStrong>메뉴</BodyStrong>
              </_.Menus>
              <_.Menus select={false}>
                <BodyStrong>커뮤니티</BodyStrong>
              </_.Menus>
              <_.Menus select={false}>
                <BodyStrong>추천</BodyStrong>
              </_.Menus>
            </div>
          </_.MenuContainer>
          <_.MenuContainer>
            <BodyStrong>User</BodyStrong>
            <div>
              <_.Menus select={false}>
                <BodyStrong>병원 정보</BodyStrong>
              </_.Menus>
            </div>
          </_.MenuContainer>
        </>
      ) : (
        <_.MenuContainer>
          <BodyStrong>Menu</BodyStrong>
          <div>
            <_.Menus select={true}>
              <BodyStrong>계정 승인</BodyStrong>
            </_.Menus>
            <_.Menus select={false}>
              <BodyStrong>커뮤니티</BodyStrong>
            </_.Menus>
          </div>
        </_.MenuContainer>
      )}
    </_.Container>
  );
}

export default Sidebar;
