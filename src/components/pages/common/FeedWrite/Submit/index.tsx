import * as _ from "./style";
import { Button } from "styles/button";
import { useRecoilValue } from "recoil";
import {
  FeedContentAtom,
  FeedShowImageAtom,
  FeedTitleAtom,
} from "atoms/feed";
import { useMutation } from "@tanstack/react-query";
import { alertError, alertSuccess } from "utils/toastify";
import { PatchFeedUpdateApi, PostAdminWriteApi } from "utils/apis/feed";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

function Submit() {
  const [seachParams] = useSearchParams();
  const id = seachParams.get("id");
  const { pathname } = useLocation();
  const title = useRecoilValue(FeedTitleAtom);
  const content = useRecoilValue(FeedContentAtom);
  const image = useRecoilValue(FeedShowImageAtom);
  const nav = useNavigate();
  console.log(pathname.split("/"));

  const { mutate: postFeedMutate } = useMutation(PostAdminWriteApi, {
    onSuccess: () => {
      alertSuccess("게시글 작성에 성공하였습니다.");
      nav(`/${pathname.split("/")[1]}/feed`);
    },
    onError: () => {
      alertError("오류가 발생했습니다. 관리자에게 문의해주세요");
    },
  });
  const { mutate: postFeedUpdateMutate } = useMutation(PatchFeedUpdateApi, {
    onSuccess: () => {
      alertSuccess("수정 성공하였습니다.");
      nav(`/${pathname.split("/")[1]}/feed/${id}`);
    },
    onError: () => {
      alertError("오류가 발생했습니다. 관리자에게 문의해주세요");
    },
  });

  const onSubmitFeed = () => {
    if (id) {
      postFeedUpdateMutate({
        feedId: id,
        feedContent: { title, content, image },
      });
    } else {
      postFeedMutate({ title, content, image });
    }
  };

  return (
    <_.Container>
      <Button width="fit-content" onClick={onSubmitFeed}>
        {id ? "수정" : "게시"}
      </Button>
    </_.Container>
  );
}

export default Submit;
