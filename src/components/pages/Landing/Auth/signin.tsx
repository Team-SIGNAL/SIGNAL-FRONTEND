import * as S from "./style";
import { logoImg } from "assets/index";
import { useRecoilState, useResetRecoilState } from "recoil";
import { signInModalAtom } from "atoms/header";
import { SignInAtom } from "atoms/auth";
import Modal from "components/common/Modal";
import Input from "components/common/Input";
import { Button } from "styles/button";
import { Body } from "styles/text";
import { useMutation } from "@tanstack/react-query";
import { PostSignIn } from "utils/apis/users";
import { alertError, alertSuccess, alertWarning } from "utils/toastify";
import { setCookie } from "utils/cookie";

function SignIn() {
  const [signInModal, setSignInModal] = useRecoilState(signInModalAtom);
  const [signInValue, setSignInValue] = useRecoilState(SignInAtom);
  const resetSignInValue = useResetRecoilState(SignInAtom);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInValue({ ...signInValue, [name]: value });
  };

  const { mutate: signinMutate } = useMutation(PostSignIn, {
    onSuccess: (data) => {
      alertSuccess("로그인에 성공하였습니다.");
      resetSignInValue();
      setCookie("access_token", data.access_token, data.expire_at);
      setCookie("refresh_token", data.refresh_token, data.expire_at); // refresh 토큰 만료시간 변경 필요
    },
    onError: () => {
      alertError("아이디와 비밀번호를 확인해주세요.");
    },
  });

  const onClickSignIn = () => {
    if (signInValue.account_id === "") alertWarning("아이디를 입력해주세요.");
    else if (signInValue.password === "")
      alertWarning("비밀번호를 입력해주세요.");
    else signinMutate();
  };

  return (
    <>
      {signInModal && (
        <Modal setModal={setSignInModal}>
          <S.Logo src={logoImg} />
          <S.InputContainer>
            <Input
              label="아이디"
              placeholder="아이디를 입력해주세요"
              onChange={onChange}
              value={signInValue.account_id}
              name="account_id"
            />
            <Input
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요"
              onChange={onChange}
              value={signInValue.password}
              name="password"
            />
          </S.InputContainer>
          <S.ButtonContainer>
            <Button onClick={onClickSignIn}>로그인</Button>
            <div>
              <Body onClick={() => {}}>아이디 찾기</Body>
              <hr />
              <Body onClick={() => {}}>비밀번호 찾기</Body>
            </div>
          </S.ButtonContainer>
        </Modal>
      )}
    </>
  );
}

export default SignIn;
