import { useEffect, useState } from "react";
import * as _ from "./style";
import Modal from "../Modal";
import Report from "assets/icon/report";
import { Body } from "styles/text";
import { Button } from "styles/button";
import Color from "styles/color";
import TextArea from "../TextArea";

function ReportModal() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [reason, setReason] = useState<string>("");

  return (
    <>
      <_.ReportContainer onClick={() => setOpenModal(!openModal)}>
        <Report />
        <Body>신고</Body>
      </_.ReportContainer>
      {openModal && (
        <Modal setModal={setOpenModal}>
          <TextArea
            placeholder="신고 사유를 입력해주세요"
            label="신고 사유"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
          <_.ButtonContainer>
            <Button
              backColor={Color.gray[400]}
              onClick={() => setOpenModal(false)}
            >
              취소
            </Button>
            <Button>신고하기</Button>
          </_.ButtonContainer>
        </Modal>
      )}
    </>
  );
}

export default ReportModal;
