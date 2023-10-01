import Logo from "assets/icon/logo";
import * as S from "./style";
import { BodyLarge } from "styles/text";

function Header() {
  return (
    <S.Container>
      <Logo />
      <S.Menu>
        <BodyLarge>병원 로그인</BodyLarge>
        <BodyLarge>병원 등록하기</BodyLarge>
      </S.Menu>
    </S.Container>
  );
}

export default Header;
