import Sidebar from "components/common/Sidebar";
<<<<<<< HEAD
import * as _ from "./style";
import { LayoutProps } from "./type";
=======
import * as S from "./style";
>>>>>>> develop
import { TitleLarge } from "styles/text";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <_.Container>
      <Sidebar />
      <_.ChildrenContainer>
        <TitleLarge>병원 정보 페이지</TitleLarge>
<<<<<<< HEAD
        {children}
      </_.ChildrenContainer>
    </_.Container>
=======
        <Outlet />
      </S.ChildrenContainer>
    </S.Container>
>>>>>>> develop
  );
}

export default Layout;
