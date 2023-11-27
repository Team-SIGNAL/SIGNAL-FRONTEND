import * as _ from "./style";
import { useQuery } from "@tanstack/react-query";
import ArticleList from "../ArticleList";
import { BodyLarge2 } from "styles/text";
import Loading from "components/common/Loading";
import Error from "components/common/Error";
import { GetHospitalListApi } from "utils/apis/admin";

function List() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["GetHospitalListApi"],
    queryFn: GetHospitalListApi,
    retry: 0,
    select: (data) => data.auth_request_list,
  });

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <Error />;
  }
  return (
    <_.Container>
      {data && data.length ? (
        data.map((v) => <ArticleList {...v} />)
      ) : (
        <BodyLarge2>승인 요청한 병원이 없습니다.</BodyLarge2>
      )}
    </_.Container>
  );
}

export default List;
