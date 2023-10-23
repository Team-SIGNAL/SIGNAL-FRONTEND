import * as _ from "./style";
import { logoImg } from "assets/index";
import { useState } from "react";
//recoil
import { useRecoilState, useSetRecoilState } from "recoil";
import { signInModalAtom, signupModalAtom } from "atoms/header";
//style
import Modal from "components/common/Modal";
import Input from "components/common/Input";
import { Button } from "styles/button";
import { alertError, alertSuccess, alertWarning } from "utils/toastify";
// react-query
import { useMutation } from "@tanstack/react-query";
import { PostSignUp } from "utils/apis/users";
import { SignUpDataType } from "type/auth.type";

const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,12}$/;
const numberRegex = /^\d{3}-\d{3,4}-\d{4}$/;

/** 회원가입 모답 */
function SignUp() {
  /** 회원가입 모달 open여부 상태 */
  const [signupModal, setSignupModal] = useRecoilState(signupModalAtom);
  /** 로그인 모달 set open 값 */
  const signinModal = useSetRecoilState(signInModalAtom);

  /** 회원가입시 필요한 데이터 값 */
  const [signupValue, setSignupValue] = useState<SignUpDataType>({
    name: "",
    phone: "",
    account_id: "",
    password: "",
  });
  /** 비밀번호 확인 */
  const [passwordCheck, setPasswordCheck] = useState<string>("");

  /** input onChange 함수 */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupValue({ ...signupValue, [name]: value });
  };

  /** 회원가입 api 연동  */
  const { mutate: signupMutate } = useMutation(PostSignUp, {
    onSuccess: () => {
      alertSuccess("회원가입에 성공하였습니다.");
      setSignupModal(false);
      signinModal(true);
    },
    onError: (err) => {
      alertError("회원가입에 실패하였습니다.");
    },
  });

  /** 회원가입시 필요한 정보가 옳은지 확인 */
  const checkDataisOk = (): boolean => {
    if (
      Object.values(signupValue).some((v) => v === "") ||
      passwordCheck === ""
    )
      alertWarning("빈칸을 다 입력해주세요.");
    else if (signupValue.name.length < 2 || signupValue.name.length > 20) {
      alertWarning("병원 이름은 2~20글자 사이입니다.");
    } else if (
      signupValue.account_id.length < 5 ||
      signupValue.account_id.length > 12
    ) {
      alertWarning("아이디는 5~12글자 사이입니다.");
    } else if (numberRegex.test(signupValue.phone)) {
      alertWarning("전화번호 형식은 010-0000-0000입니다.");
    } else if (
      signupValue.password.length < 8 ||
      signupValue.password.length > 12 ||
      !passwordRegex.test(signupValue.password)
    ) {
      alertWarning(
        "비밀번호는 8자 이상 12이하 문자열, 하나이상 숫자, 문자, 특수문자를 포함해야합니다."
      );
    } else if (signupValue.password !== passwordCheck) {
      alertWarning("비밀번호 확인이 맞지 않습니다.");
    } else {
      return true;
    }
    return false;
  };

  /** 회원강비 버튼 클릭 시  */
  const onClickSignup = () => {
    if (checkDataisOk()) {
      signupMutate(signupValue);
    }
  };

  return (
    <>
      {signupModal && (
        <Modal setModal={setSignupModal}>
          <_.Logo src={logoImg} />
          <_.InputContainer>
            <Input
              label="병원 이름"
              placeholder="병원 이름을 입력해주세요"
              onChange={onChange}
              value={signupValue.name}
              name="name"
            />
            <Input
              label="병원 전화번호"
              placeholder="010-1234-1234"
              onChange={onChange}
              value={signupValue.phone}
              name="phone"
            />
            <Input
              label="아이디"
              placeholder="아이디를 입력해주세요"
              onChange={onChange}
              value={signupValue.account_id}
              name="account_id"
            />
            <Input
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요"
              onChange={onChange}
              type="password"
              value={signupValue.password}
              name="password"
            />
            <Input
              label="비밀번호 확인"
              placeholder="비밀번호를 다시 입력해주세요"
              type="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPasswordCheck(e.target.value);
              }}
              value={passwordCheck}
            />
          </_.InputContainer>
          <Button onClick={onClickSignup}>회원가입</Button>
        </Modal>
      )}
    </>
  );
}

export default SignUp;
