import Modal from "components/common/Modal";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { loginModalAtom } from "atoms/header";
import { logoImg } from "assets/index";
import Input from "components/common/Input";
import { Button } from "styles/button";
import { Body } from "styles/text";

function Login() {
  const [loginModal, setLoginpodal] = useRecoilState(loginModalAtom);

  return (
    <>
      {loginModal && (
        <Modal setModal={setLoginpodal}>
          <S.Logo src={logoImg} />
          <S.InputContainer>
            <Input
              label="아이디"
              placeholder="아이디를 입력해주세요"
              onChange={() => {}}
              value=""
            />
            <Input
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요"
              onChange={() => {}}
              value=""
            />
          </S.InputContainer>
          <S.ButtonContainer>
            <Button>로그인</Button>
            <div>
              <Body>아이디 찾기</Body>
              <hr />
              <Body>비밀번호 찾기</Body>
            </div>
          </S.ButtonContainer>
        </Modal>
      )}
    </>
  );
}

export default Login;
