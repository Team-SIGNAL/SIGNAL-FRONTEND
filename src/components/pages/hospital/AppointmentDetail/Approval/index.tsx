import { Body2, Title, BodyStrong, BodyLarge } from "styles/text";
import * as _ from "./style";
import ReservationCheck from "../ReservationCheck";
import { useQuery } from "@tanstack/react-query";
import { GetReservationDetailApi } from "utils/apis/reservation";
import { AprovalProps } from "./type";
import { differenceInYears } from "date-fns";
import StateBadge from "../StateBadge";
import Loading from "components/common/Loading";
import Error from "components/common/Error";

function Approval({ id }: AprovalProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["GetReservationDetailApi", id],
    queryFn: () => GetReservationDetailApi(id),
    retry: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const today = new Date();
  const birthday = new Date(data?.birth!);

  if (isLoading) <Loading />;
  else if (isError) <Error />;
  return (
    <_.Container>
      {data && (
        <>
          <_.ApprovalContainer>
            <_.NameContainer>
              <div>
                <Title>{data.name}</Title>
                <Body2>
                  {data.gender} ({differenceInYears(today, birthday)}세)
                </Body2>
              </div>
              <div>
                <BodyLarge>{data.time}</BodyLarge>
                <StateBadge state={data.reservation_status} />
              </div>
            </_.NameContainer>
            <_.InformationTable>
              <BodyStrong>생년월일</BodyStrong>
              <Body2>{data.birth}</Body2>
              <BodyStrong>전화번호</BodyStrong>
              <Body2>{data.phone}</Body2>
            </_.InformationTable>

            <_.ReasonContainer>
              <BodyStrong>사유</BodyStrong>
              <Body2>{data.reason}</Body2>
            </_.ReasonContainer>
          </_.ApprovalContainer>
          {data.reservation_status === "WAIT" && (
            <_.ApprovalContainer>
              <ReservationCheck id={id} />
            </_.ApprovalContainer>
          )}
        </>
      )}
    </_.Container>
  );
}

export default Approval;
