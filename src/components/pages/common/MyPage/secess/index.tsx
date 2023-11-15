import * as _ from "./style";
import { useMutation } from "@tanstack/react-query";
import { BodyLarge } from "styles/text";
import { alertError, alertSuccess } from "utils/toastify";
import { DeleteAccountApi } from "utils/apis/admin";
import { useNavigate } from "react-router-dom";
import { confirmDialog } from "utils/confirm";

function Secess() {
  const nav = useNavigate();

  /** 회원탈퇴 api 코드 */
  const { mutate: secessionMutate } = useMutation(DeleteAccountApi, {
    onSuccess: () => {
      alertSuccess("회원탈퇴되었습니다.");
      nav("/");
    },
    onError: () => {
      alertError("회원탈퇴에 실패하였습니다. 관리자에게 문의해주세요.");
    },
  });
  /** 회원탈퇴 onClick */
  const secessOnClick = () => {
    confirmDialog("회원탈퇴하시겠습니까?").then(() => secessionMutate());
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
