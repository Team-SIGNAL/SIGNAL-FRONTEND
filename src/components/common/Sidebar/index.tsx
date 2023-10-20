import { BodyStrong, SubTitle } from "styles/text";
import * as _ from "./style";
import { exprofileing } from "assets/index";
import { useLocation } from "react-router-dom";
function Sidebar() {
  const { pathname } = useLocation();
  return (
    <_.Container>
      <_.ProfileContainer>
        <img src={exprofileing} alt="profileImg" />
        <SubTitle>가나다라 병원</SubTitle>
      </_.ProfileContainer>
      {pathname.split("/")[1] === "hospital" ? (
        <>
          <_.MenuContainer>
            <BodyStrong>Menu</BodyStrong>
            <div>
              <_.Menus $isselect={true}>
                <BodyStrong>메뉴</BodyStrong>
              </_.Menus>
              <_.Menus $isselect={false}>
                <BodyStrong>커뮤니티</BodyStrong>
              </_.Menus>
              <_.Menus $isselect={false}>
                <BodyStrong>추천</BodyStrong>
              </_.Menus>
            </div>
          </_.MenuContainer>
          <_.MenuContainer>
            <BodyStrong>User</BodyStrong>
            <div>
              <_.Menus $isselect={false}>
                <BodyStrong>병원 정보</BodyStrong>
              </_.Menus>
            </div>
          </_.MenuContainer>
        </>
      ) : (
        <_.MenuContainer>
          <BodyStrong>Menu</BodyStrong>
          <div>
            <_.Menus $isselect={true}>
              <BodyStrong>계정 승인</BodyStrong>
            </_.Menus>
            <_.Menus $isselect={false}>
              <BodyStrong>커뮤니티</BodyStrong>
            </_.Menus>
          </div>
        </_.MenuContainer>
      )}
    </_.Container>
  );
}

export default Sidebar;
