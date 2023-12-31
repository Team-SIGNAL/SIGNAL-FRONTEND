import * as _ from "./style";
import { logoImg } from "assets/index";
import { useState } from "react";
//recoil
import { useRecoilState } from "recoil";
import { signInModalAtom } from "atoms/header";
//style
import Modal from "components/common/Modal";
import Input from "components/common/Input";
import { Button } from "styles/button";
import { alertError, alertSuccess, alertWarning } from "utils/toastify";
import { useNavigate } from "react-router-dom";
import { PostSignInApi } from "utils/apis/admin";
import { useMutation } from "@tanstack/react-query";
import { setCookie } from "utils/cookie";

function SignIn() {
  const nav = useNavigate();
  /** 로그인 modal open 상태 확인  */
  const [signInModal, setSignInModal] = useRecoilState(signInModalAtom);
  const [signInValue, setSignInValue] = useState({
    account_id: "",
    password: "",
  });

  /** 로그인 input onChagne 함수 */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInValue({ ...signInValue, [name]: value });
  };

  /** 로그인 api 연동 */
  const { mutate: signinMutate } = useMutation(PostSignInApi, {
    onSuccess: (data) => {
      alertSuccess("로그인에 성공하였습니다.");
      setCookie("access_token", data.access_token, new Date(data.access_exp));
      setCookie("refresh_token", data.refresh_token, new Date(data.refresh_exp));
      localStorage.setItem("ROLE", data.role);
      if (data.role === "ADMIN") nav("/admin");
      else if (data.role === "HOSPITAL") nav("/hospital");
      else nav("/certified");
    },
    onError: () => {
      alertError("아이디와 비밀번호를 확인해주세요.");
    },
  });

  /** 로그인 버튼 클릭시 동작 */
  const onClickSignIn = () => {
    if (signInValue.account_id === "") alertWarning("아이디를 입력해주세요.");
    else if (signInValue.password === "")
      alertWarning("비밀번호를 입력해주세요.");
    else signinMutate(signInValue);
  };

  return (
    <>
      {signInModal && (
        <Modal setModal={setSignInModal}>
          <_.Logo src={logoImg} />
          <_.InputContainer>
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
              type="password"
            />
          </_.InputContainer>
          <_.ButtonContainer>
            <Button onClick={onClickSignIn}>로그인</Button>
            {/* <div>
              <div>
                <Body onClick={() => {}}>아이디 찾기</Body>
                <hr />
                <Body onClick={() => {}}>비밀번호 찾기</Body>
              </div>
            </div> */}
          </_.ButtonContainer>
        </Modal>
      )}
    </>
  );
}

export default SignIn;
