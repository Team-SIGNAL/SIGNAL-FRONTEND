import Sidebar from "components/common/Sidebar";
import * as _ from "./style";
import { LayoutProps } from "./type";
import { TitleLarge } from "styles/text";

function Layout({ children }: LayoutProps) {
  return (
    <_.Container>
      <Sidebar />
      <_.ChildrenContainer>
        <TitleLarge>병원 정보 페이지</TitleLarge>
        {children}
      </_.ChildrenContainer>
    </_.Container>
  );
}

export default Layout;
