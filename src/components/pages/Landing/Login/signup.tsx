import { useRecoilState } from "recoil";
import * as S from "./style";
import { signupModalAtom } from "atoms/header";
import Modal from "components/common/Modal";
import { logoImg } from "assets/index";
import Input from "components/common/Input";
import { Button } from "styles/button";
function SignUp() {
  const [signupModal, setSignupMpodal] = useRecoilState(signupModalAtom);

  return (
    <>
      {signupModal && (
        <Modal setModal={setSignupMpodal}>
          <S.Logo src={logoImg} />
          <S.InputContainer>
            <Input
              label="병원 이름"
              placeholder="병원 이름을 입력해주세요"
              onChange={() => {}}
              value=""
            />
            <Input
              label="병원 전화번호"
              placeholder="병원 전화번호를 입력해주세요"
              onChange={() => {}}
              value=""
            />
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
            <Input
              label="비밀번호 확인"
              placeholder="비밀번호를 다시 입력해주세요"
              onChange={() => {}}
              value=""
            />
          </S.InputContainer>
          <Button>회원가입</Button>
        </Modal>
      )}
    </>
  );
}

export default SignUp;
