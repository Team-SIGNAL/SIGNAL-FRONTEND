import * as _ from "./style";
import { Body, Body2, TitleLarge } from "styles/text";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "components/common/Loading";
import Error from "components/common/Error";
import ReportModal from "components/common/Report";
import { DeleteFeedApi, GetFeedDetailApi } from "utils/apis/feed";
import { confirmDialog } from "utils/confirm";
import { alertError, alertSuccess } from "utils/toastify";

function Content() {
  const { pathname } = useLocation();
  const id = pathname.split("/")[3];
  const nav = useNavigate();

  const {
    isLoading,
    data: feed,
    isError,
  } = useQuery({
    queryKey: ["getFeed", id],
    queryFn: () => GetFeedDetailApi(id),
    retry: 0,
    refetchOnWindowFocus: false,
  });

  const { mutate: deleteFeed } = useMutation(DeleteFeedApi, {
    onSuccess: () => {
      alertSuccess("게시글이 삭제되었습니다.");
      nav("/hospital/feed?tag=HOSPITAL");
    },
    onError: () => {
      alertError("삭제에 실해하였습니다. 관리자에게 문의해주세요.");
    },
  });

  const onUpdate = () => {
    nav(`/hospital/feed/write?id=${id}`);
  };

  const onDelete = () => {
    confirmDialog("진짜 삭제하시겠습니까?")
      .then(() => {
        deleteFeed(id);
      })
      .catch(() => {});
  };

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <Error />;
  }
  return (
    <_.Container>
      {feed && (
        <>
          <_.TitleContainer>
            <TitleLarge>{feed.title}</TitleLarge>
            {feed.mine && (
              <div>
                <div>
                  <Body onClick={onUpdate}>수정</Body>
                  <Body onClick={onDelete}>삭제</Body>
                </div>
                <Body2>{feed.create_date}</Body2>
              </div>
            )}
          </_.TitleContainer>
          {feed.image && <_.FeedImg src={feed.image} alt="feed Img" />}
          <_.FeedContent>{feed.content}</_.FeedContent>
          {!feed.mine && <ReportModal />}
        </>
      )}
    </_.Container>
  );
}

export default Content;
