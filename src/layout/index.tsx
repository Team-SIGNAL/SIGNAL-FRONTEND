import Sidebar from "components/common/Sidebar";
import * as S from "./style";
import { TitleLarge } from "styles/text";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <S.Container>
      <Sidebar />
      <S.ChildrenContainer>
        <TitleLarge>병원 정보 페이지</TitleLarge>
        <Outlet />
      </S.ChildrenContainer>
    </S.Container>
  );
}

export default Layout;
