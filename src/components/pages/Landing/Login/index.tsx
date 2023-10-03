import Modal from "components/common/Modal";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { loginModalAtom } from "atoms/header";

function Login() {
  const [loginModal, setLoginpodal] = useRecoilState(loginModalAtom);


  return (
    <>
      {loginModal && (
        <Modal setModal={setLoginpodal}>
          <p>login</p>
        </Modal>
      )}
    </>
  );
}

export default Login;
