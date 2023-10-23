import * as _ from "./style";
import { useSetRecoilState } from "recoil";
import { signInModalAtom, signupModalAtom } from "atoms/header";
import { BodyLarge } from "styles/text";
import Logo from "assets/icon/logo";

function Header() {
  const setSignInModal = useSetRecoilState(signInModalAtom);
  const setSignupModal = useSetRecoilState(signupModalAtom);

  return (
    <_.Container>
      <Logo />
      <_.Menu>
        <BodyLarge
          onClick={() => {
            setSignInModal(true);
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
      </_.Menu>
    </_.Container>
  );
}

export default Header;
