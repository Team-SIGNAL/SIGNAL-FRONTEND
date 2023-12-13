import { useState } from "react";
import * as _ from "./style";
import Modal from "../Modal";
import { Button } from "styles/button";
import Color from "styles/color";
import TextArea from "../TextArea";
import { useMutation } from "@tanstack/react-query";
import { PostReportApi } from "utils/apis/report";
import { alertError, alertSuccess, alertWarning } from "utils/toastify";
import FileInput from "../FileInput";
import { useImageUpload } from "hooks/useImageUpload";
import { confirmDialog } from "utils/confirm";

type reportDataType = {
  content: string;
  image: string;
};
function ReportModal({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [reportData, setReportData] = useState<reportDataType>({
    content: "",
    image: "",
  });

  const { mutate: PostReport } = useMutation(PostReportApi, {
    onSuccess: () => {
      alertSuccess("버그 제보에 성공하였습니다. 소중한 의견 감사합니다.");
      setReportData({ image: "", content: "" });
      setOpenModal(false);
    },
    onError: () => {
      alertError("버그 제보에 실패하였습니다. 관리자에게 문의해주세요.");
    },
  });

  const { uploadImage } = useImageUpload((image: string) => {
    setReportData({ ...reportData, image });
  });
  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      uploadImage(e.target.files[0]);
    }
  };

  const onClickPost = () => {
    confirmDialog("버그 제보하시겠습니까?")
      .then(() => {
        if (!reportData.content) alertWarning("제보 할 내용을 입력해주세요.");
        else {
          PostReport(reportData);
        }
      })
      .catch(() => {
        setReportData({ image: "", content: "" });
        setOpenModal(false);
      });
  };
  return (
    <>
      (
      <Modal setModal={setOpenModal}>
        <TextArea
          placeholder="버그 제보를 입력해주세요"
          label="버그 내용"
          value={reportData.content}
          onChange={(e) =>
            setReportData({ ...reportData, content: e.target.value })
          }
          height="150px"
        />
        <FileInput label="이미지 첨부 (선택)" onChange={onChangeFile} />
        <_.ButtonContainer>
          <Button
            backColor={Color.gray[400]}
            onClick={() => setOpenModal(false)}
          >
            취소
          </Button>
          <Button onClick={onClickPost}>버그 신고하기</Button>
        </_.ButtonContainer>
      </Modal>
    </>
  );
}

export default ReportModal;
