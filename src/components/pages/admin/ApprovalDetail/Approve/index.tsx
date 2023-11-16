import * as _ from "./style";
import Color from "styles/color";
import { Button } from "styles/button";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { alertError } from "utils/toastify";
import { confirmDialog } from "utils/confirm";
import { PatchHospitalAuth } from "utils/apis/admin";

function Approve() {
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];
  const nav = useNavigate();
  const { mutate: postFeedMutate } = useMutation(PatchHospitalAuth, {
    onSuccess: () => {
      nav("/admin");
    },
    onError: () => {
      alertError("오류가 발생했습니다. 관리자에게 문의해주세요");
    },
  });
  const confirm = (auth_status: boolean) => {
    confirmDialog(`${auth_status ? "승인" : "거절"}하시겠습니까?`).then(() =>
      postFeedMutate({ id: Number(id), auth_status })
    );
  };

  return (
    <_.Container>
      <_.ButtonContainer>
        <Button backColor={Color.gray[400]} onClick={() => confirm(false)}>
          거절
        </Button>
        <Button onClick={() => confirm(true)}>승인</Button>
      </_.ButtonContainer>
    </_.Container>
  );
}

export default Approve;
