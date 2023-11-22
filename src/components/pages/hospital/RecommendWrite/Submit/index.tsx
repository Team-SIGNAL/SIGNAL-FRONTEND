import { Button } from "styles/button";

import { useRecoilValue } from "recoil";
import { RecWriteReqType } from "types/rec.type";
import { RecWriteAtom } from "atoms/rec";
import { useMutation } from "@tanstack/react-query";
import { PostRecommendApi } from "utils/apis/recommend";
import { useNavigate } from "react-router-dom";
import { alertError, alertSuccess, alertWarning } from "utils/toastify";

function Submit() {
  const recWrite = useRecoilValue<RecWriteReqType>(RecWriteAtom);
  const nav = useNavigate();

  const { mutate: submitRecommend } = useMutation(PostRecommendApi, {
    onSuccess: () => {
      nav("/hospital/rec");
      alertSuccess("추천 게시글 작성에 성공하였습니다.");
    },
    onError: () => {
      alertError("관리자에게 문의해주세요.");
    },
  });

  const onClickSubmit = () => {
    if (!recWrite.title) {
      alertWarning("제목을 입력해주세요.");
    } else if (!recWrite.content) {
      alertWarning("내용을 입력해주세요");
    } else {
      submitRecommend(recWrite);
    }
  };

  return <Button onClick={onClickSubmit}>추천 등록</Button>;
}

export default Submit;
