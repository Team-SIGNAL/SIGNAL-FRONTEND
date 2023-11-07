import { Button } from "styles/button";
import * as _ from "./style";
import { useRecoilValue } from "recoil";
import {
  FeedContentAtom,
  FeedIdAtom,
  FeedImageAtom,
  FeedTitleAtom,
} from "atoms/feed";
import { useMutation } from "@tanstack/react-query";
import { patchImage } from "utils/apis/attachment";
import { alertError, alertSuccess } from "utils/toastify";
import { patchUpdateFeed, postFeed } from "utils/apis/feed";

function Submit() {
  const id = useRecoilValue(FeedIdAtom);
  const title = useRecoilValue(FeedTitleAtom);
  const content = useRecoilValue(FeedContentAtom);
  const file = useRecoilValue(FeedImageAtom);

  const { mutate: imageMutate } = useMutation(patchImage, {
    onSuccess: (data) => {
      onSubmitFeed(data.image);
    },
    onError: () => {
      alertError("오류가 발생했습니다. 관리자에게 문의해주세요");
    },
  });
  const { mutate: postFeedMutate } = useMutation(postFeed, {
    onSuccess: () => {
      alertSuccess("게시글 작성에 성공하였습니다.");
    },
    onError: () => {
      alertError("오류가 발생했습니다. 관리자에게 문의해주세요");
    },
  });
  const { mutate: postFeedUpdateMutate } = useMutation(patchUpdateFeed, {
    onSuccess: () => {
      alertSuccess("수정 성공하였습니다.");
    },
    onError: () => {
      alertError("오류가 발생했습니다. 관리자에게 문의해주세요");
    },
  });

  const onSubmitImage = () => {
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      imageMutate(formData);
    } else {
      onSubmitFeed("");
    }
  };

  const onSubmitFeed = (image: string) => {
    if (id) {
      postFeedUpdateMutate({ title, content, image, id });
    } else {
      postFeedMutate({ title, content, image });
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
