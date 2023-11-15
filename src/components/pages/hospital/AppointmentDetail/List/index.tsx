import { useLocation } from "react-router-dom";
import * as _ from "./style";
import ListArticle from "../ListArticle";
import { useQuery } from "@tanstack/react-query";
import { GetDateApi } from "utils/apis/reservation";
import Loading from "components/common/Loading";
import Error from "components/common/Error";
import { ReservationType } from "types/reservation.type";

function List() {
  const { pathname } = useLocation();
  const date = pathname.split("/")[2];

  const { data, isLoading, isError } = useQuery({
    queryKey: ["GetDateApi", date],
    queryFn: () => GetDateApi(date),
    retry: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    <Loading />;
  } else if (isError) {
    <Error />;
  }
  return (
    <_.Container>
      {data?.appointment_list.map((v) => (
        <ListArticle {...v} />
      ))}
    </_.Container>
  );
}

export default List;
