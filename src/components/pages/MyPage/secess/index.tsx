import * as _ from "./style";
import { useMutation } from "@tanstack/react-query";
import { BodyLarge } from "styles/text";
import { DeleteSecession } from "utils/apis/users";
import { alertError, alertSuccess } from "utils/toastify";

function Secess() {
  const { mutate: secessionMutate } = useMutation(DeleteSecession, {
    onSuccess: () => {
      alertSuccess("회원탈퇴되었습니다.");
    },
    onError: () => {
      alertError("회원탈퇴에 실패하였습니다. 관리자에게 문의해주세요.");
    },
  });
  const secessOnClick = () => {
    secessionMutate();
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
