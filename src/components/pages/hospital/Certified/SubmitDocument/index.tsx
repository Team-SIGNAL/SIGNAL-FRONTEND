import * as _ from "./style";
import { BodyLarge2, BodyLarge, SubTitle, BodyStrong } from "styles/text";
import Plus from "assets/icon/plus";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Button } from "styles/button";
import { useMutation } from "@tanstack/react-query";
import { alertError } from "utils/toastify";
import { useImageUpload } from "hooks/useImageUpload";
import { PatchImageApi } from "utils/apis/admin";
import { SubmitDocumentProps } from "./type";
import { AuthStatus } from "types/admin.type";

function SubmitDocument({ requestStatus }: SubmitDocumentProps) {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File>();
  const [loadingState, setLoadingState] = useState<AuthStatus>("REFUSE");

  useEffect(() => {
    setLoadingState(requestStatus ?? "REFUSE");
  }, [requestStatus]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const { mutate: imageSubmitMutate } = useMutation(PatchImageApi, {
    onSuccess: () => {
      alertError("성공");
      setLoadingState("WAIT");
    },
    onError: () => {
      alertError("오류가 발생했습니다. 관리자에게 문의해주세요");
    },
  });

  const { uploadImage } = useImageUpload((hospital_image: any) => {
    if (hospital_image) imageSubmitMutate({ hospital_image });
  });

  const SubmitFile = () => {
    if (!file) {
      alertError("사업자등록증 또는 의료긱관개설신고(허가)증을 등록해주세요");
    } else {
      uploadImage(file);
    }
  };
  return (
    <_.Contianer>
      <SubTitle>병원인증</SubTitle>
      {loadingState === "WAIT" ? (
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
