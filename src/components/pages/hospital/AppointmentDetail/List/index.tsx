import { useLocation } from "react-router-dom";
import * as _ from "./style";
import ListArticle from "../ListArticle";
import { useQuery } from "@tanstack/react-query";
import { GetDateApi } from "utils/apis/reservation";
import Loading from "components/common/Loading";
import Error from "components/common/Error";
import { BodyLarge } from "styles/text";

function List() {
  const { pathname } = useLocation();
  const date = pathname.split("/")[2];

  const { data, isLoading, isError } = useQuery({
    queryKey: ["GetDateApi", date],
    queryFn: () => GetDateApi(date),
    retry: 0,
    select: (data) => data.appointment_list,
  });

  if (isLoading) {
    <Loading />;
  } else if (isError) {
    <Error />;
  }
  return (
    <_.Container>
      {!data?.length ? (
        <BodyLarge>예약이 없습니다.</BodyLarge>
      ) : (
        data.map((v) => <ListArticle {...v} />)
      )}
    </_.Container>
  );
}

export default List;
