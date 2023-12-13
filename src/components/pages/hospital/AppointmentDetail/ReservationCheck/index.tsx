import TextArea from "components/common/TextArea";
import * as _ from "./style";
import { useState } from "react";
import { Button } from "styles/button";
import Color from "styles/color";
import { ReservationCheckProps } from "./type";
import { confirmDialog } from "utils/confirm";
import { useMutation } from "@tanstack/react-query";
import { PatchReservationApi } from "utils/apis/reservation";
import { alertWarning } from "utils/toastify";

function ReservationCheck({ id }: ReservationCheckProps) {
  const [reason, setReson] = useState("");

  const { mutate: PatchReservationMutate } = useMutation(PatchReservationApi, {
    onSuccess: () => {
      window.location.reload();
    },
    onError: () => {},
  });

  const onReservation = (state: boolean) => {
    if (!state && reason.length === 0) {
      alertWarning("사유를 입력해주세요");
    } else {
      PatchReservationMutate({
        id,
        reservation_status: state ? "APPROVE" : "REFUSE",
        reason,
      });
    }
  };
  return (
    <_.Container>
      <TextArea
        value={reason}
        placeholder="거절 선택시 사유를 입력해주세요."
        onChange={(e) => setReson(e.target.value)}
      />
      <_.ButtonContainer>
        <Button
          backColor={Color.gray[400]}
          onClick={() =>
            confirmDialog("거절하시겠습니까?")
              .then(() => onReservation(false))
              .catch(() => {})
          }
        >
          거절
        </Button>
        <Button
          onClick={() =>
            confirmDialog("승인하시겠습니까?")
              .then(() => onReservation(true))
              .catch(() => {})
          }
        >
          승인
        </Button>
      </_.ButtonContainer>
    </_.Container>
  );
}

export default ReservationCheck;
