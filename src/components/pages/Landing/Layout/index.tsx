import * as _ from "./style";
import Header from "components/common/Header";
import { LayoutProps } from "./type";

function Layout({ children }: LayoutProps) {
  return (
    <_.Container>
      <Header />
      <_.ChildrenContainer>{children}</_.ChildrenContainer>
    </_.Container>
  );
}

export default Layout;
