import * as _ from "./style";
import { Button } from "styles/button";
import { useRecoilValue } from "recoil";
import {
  FeedContentAtom,
  FeedImageAtom,
  FeedTitleAtom,
} from "atoms/feed";
import { useMutation } from "@tanstack/react-query";
import { alertError, alertSuccess } from "utils/toastify";
import { useImageUpload } from "hooks/useImageUpload";
import { PatchFeedUpdateApi, PostAdminWriteApi } from "utils/apis/feed";
import { useSearchParams } from "react-router-dom";

function Submit() {
  const [seachParams] = useSearchParams();
  const id = seachParams.get("id");
  const title = useRecoilValue(FeedTitleAtom);
  const content = useRecoilValue(FeedContentAtom);
  const file = useRecoilValue(FeedImageAtom);

  const { mutate: postFeedMutate } = useMutation(PostAdminWriteApi, {
    onSuccess: () => {
      alertSuccess("게시글 작성에 성공하였습니다.");
    },
    onError: () => {
      alertError("오류가 발생했습니다. 관리자에게 문의해주세요");
    },
  });
  const { mutate: postFeedUpdateMutate } = useMutation(PatchFeedUpdateApi, {
    onSuccess: () => {
      alertSuccess("수정 성공하였습니다.");
    },
    onError: () => {
      alertError("오류가 발생했습니다. 관리자에게 문의해주세요");
    },
  });

  const { uploadImage } = useImageUpload((image: any) => {
    if (id) {
      postFeedUpdateMutate({
        feedId: Number(id),
        feedContent: { title, content, image },
      });
    } else {
      postFeedMutate({ title, content, image });
    }
  });

  const onSubmitFeed = () => {
    if (id) {
      postFeedUpdateMutate({
        feedId: Number(id),
        feedContent: { title, content },
      });
    } else {
      postFeedMutate({ title, content });
    }
  };

  const onSubmitImage = () => {
    if (file) {
      uploadImage(file);
    } else {
      onSubmitFeed();
    }
  };

  return (
    <_.Container>
      <Button width="fit-content" onClick={onSubmitImage}>
        {id ? "수정" : "게시"}
      </Button>
    </_.Container>
  );
}

export default Submit;
