import { useRecoilValue } from "recoil";
import * as _ from "./style";
import { useMutation } from "@tanstack/react-query";
import { BodyLarge } from "styles/text";
import { alertError, alertSuccess } from "utils/toastify";
import { UseIdAtom } from "atoms/user";
// import { DeleteSecession } from "utils/apis/poop/admin";

function Secess() {
  /** user_id value */
  const user_id = useRecoilValue(UseIdAtom);

  /** 회원탈퇴 api 코드 */
  // const { mutate: secessionMutate } = useMutation(DeleteSecession, {
  //   onSuccess: () => {
  //     alertSuccess("회원탈퇴되었습니다.");
  //   },
  //   onError: () => {
  //     alertError("회원탈퇴에 실패하였습니다. 관리자에게 문의해주세요.");
  //   },
  // });
  /** 회원탈퇴 onClick */
  const secessOnClick = () => {
    // secessionMutate();
  };
  return (
    <_.Container>
      <button onClick={secessOnClick}>
        <BodyLarge>회원탈퇴</BodyLarge>
      </button>
    </_.Container>
  );
}

export default Secess;
