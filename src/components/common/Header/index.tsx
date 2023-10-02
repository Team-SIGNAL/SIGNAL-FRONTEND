import Logo from "assets/icon/logo";
import * as S from "./style";
import { BodyLarge } from "styles/text";
import { useSetRecoilState } from "recoil";
import { loginModalAtom, signupModalAtom } from "atoms/header";

function Header() {
  const setLoginModal = useSetRecoilState(loginModalAtom);
  const setSignupModal = useSetRecoilState(signupModalAtom);

  return (
    <S.Container>
      <Logo />
      <S.Menu>
        <BodyLarge
          onClick={() => {
            setLoginModal(true);
          }}
        >
          병원 로그인
        </BodyLarge>
        <BodyLarge
          onClick={() => {
            setSignupModal(true);
          }}
        >
          병원 등록하기
        </BodyLarge>
      </S.Menu>
    </S.Container>
  );
}

export default Header;
