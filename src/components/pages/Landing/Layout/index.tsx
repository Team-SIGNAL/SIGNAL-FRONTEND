import * as S from "./style";
import Header from "components/common/Header";
import { LayoutProps } from "./type";

function Layout({ children }: LayoutProps) {
  return (
    <S.Container>
      <Header />
      <S.ChildrenContainer>{children}</S.ChildrenContainer>
    </S.Container>
  );
}

export default Layout;
