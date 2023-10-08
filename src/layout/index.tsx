import Sidebar from "components/common/Sidebar";
import * as S from "./style";
import { LayoutProps } from "./type";
import { TitleLarge } from "styles/text";

function Layout({ children }: LayoutProps) {
  return (
    <S.Container>
      <Sidebar />
      <S.ChildrenContainer>
        <TitleLarge>병원 정보 페이지</TitleLarge>
        {children}
      </S.ChildrenContainer>
    </S.Container>
  );
}

export default Layout;
