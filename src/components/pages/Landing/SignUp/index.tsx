import { useRecoilState } from "recoil";
import * as S from "./style";
import { signupModalAtom } from "atoms/header";
import Modal from "components/common/Modal";
function SignUp() {
  const [signupModal, setSignupMpodal] = useRecoilState(signupModalAtom);

  return(<>
   {signupModal && (
        <Modal setModal={setSignupMpodal}>
          <p>signup</p>
        </Modal>
      )}
  </>)
}

export default SignUp