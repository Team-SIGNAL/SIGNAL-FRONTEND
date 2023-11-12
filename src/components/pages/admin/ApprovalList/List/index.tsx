import * as _ from "./style";
import { useQuery } from "@tanstack/react-query";
import { GetApprovalList } from "utils/apis/poop/admin";
import ArticleList from "../ArticleList";
import { BodyLarge2 } from "styles/text";
import Loading from "components/common/Loading";
import Error from "components/common/Error";

function List() {
  const {
    isLoading,
    isError,
    data: approve_request_list,
  } = useQuery({
    queryKey: ["getApprovalList"],
    queryFn: () => GetApprovalList(),
    retryOnMount: false,
    retry: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: (data) => data.approve_request_list,
  });

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <Error />;
  } else {
    return (
      <_.Container>
        {approve_request_list && approve_request_list.length ? (
          approve_request_list.map((v) => <ArticleList {...v} />)
        ) : (
          <BodyLarge2>승인 요청한 병원이 없습니다.</BodyLarge2>
        )}
      </_.Container>
    );
  }
}

export default List;
