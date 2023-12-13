import { useState } from "react";
import * as _ from "./style";
import { defaultProfileImg } from "assets/index";
import Modal from "../Modal";
import { Button } from "styles/button";

function ProfileImg({ image }: { image: string }) {
  const [big, setBig] = useState<boolean>(false);

  const onSaveAs = (uri: string) => {
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = uri;
    link.download = "귀여운 사진";
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <_.Image onClick={() => setBig(true)} src={image ?? defaultProfileImg} />
      {big && (
        <Modal setModal={setBig}>
          <_.Conatiner>
            <_.DetailImage src={image ?? defaultProfileImg} />
            <Button onClick={() => onSaveAs(image)}>다운로드</Button>
          </_.Conatiner>
        </Modal>
      )}
    </div>
  );
}

export default ProfileImg;
