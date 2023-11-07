import * as _ from "./style";
import { BodyLarge2, BodyLarge, SubTitle, BodyStrong } from "styles/text";
import Plus from "assets/icon/plus";
import { ChangeEvent, useRef, useState } from "react";
import { Button } from "styles/button";
import { useMutation } from "@tanstack/react-query";
import { patchImage } from "utils/apis/attachment";
import { alertError } from "utils/toastify";
import { PatchHostpitalImg } from "utils/apis/admin";

function SubmitDocument() {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File>();
  const [loadingState, setLoadingState] = useState<boolean>(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const { mutate: imageMutate } = useMutation(patchImage, {
    onSuccess: (data) => {
      const { image } = data;
      //imageSubmitMutate(image);
      console.log(data);
    },
    onError: () => {
      alertError("오류가 발생했습니다. 관리자에게 문의해주세요");
    },
  });

  const { mutate: imageSubmitMutate } = useMutation(PatchHostpitalImg, {
    onSuccess: () => {
      setLoadingState(true);
    },
    onError: () => {
      alertError("오류가 발생했습니다. 관리자에게 문의해주세요");
    },
  });

  const SubmitFile = () => {
    if (!file) {
      alertError("사업자등록증 또는 의료긱관개설신고(허가)증을 등록해주세요");
    } else {
      const formData = new FormData();
      formData.append("image", file);
      console.log(file);
      imageMutate(formData);
    }
  };

  return (
    <_.Contianer>
      <SubTitle>병원인증</SubTitle>
      {loadingState ? (
        <BodyLarge2>
          승인중입니다. 관리자가 거절시 재승인 받을 수 있습니다.
        </BodyLarge2>
      ) : (
        <>
          <_.Explain>
            <BodyLarge2>사업자등록증 또는 의료긱관개설신고(허가)증</BodyLarge2>
            <BodyLarge>이 필요합니다.</BodyLarge>
          </_.Explain>
          <_.SubmitContainer onClick={() => imageInputRef.current?.click()}>
            <_.PlusButton>
              <Plus />
            </_.PlusButton>
            <BodyStrong>{file ? file?.name : "자료 첨부하기"}</BodyStrong>
          </_.SubmitContainer>
          <_.FileInput
            ref={imageInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          {file && <Button onClick={SubmitFile}>인증하기</Button>}
          <_.SmallExplain>
            병원 인증까지 2~3일이 소요될 수 있습니다.
          </_.SmallExplain>
        </>
      )}
    </_.Contianer>
  );
}

export default SubmitDocument;
