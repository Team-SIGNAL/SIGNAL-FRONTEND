import { BodyStrong, Body2 } from "styles/text";
import * as _ from "./stlye";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import Loading from "components/common/Loading";
import Error from "components/common/Error";
import { GetHospitalDetailApi } from "utils/apis/admin";

function Info() {
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];

  const {
    data: hospital,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["GetHospitalDetailApi", id],
    queryFn: () => GetHospitalDetailApi(Number(id)),
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
      <_.InformationTable>
        <div>
          <BodyStrong>병원 이름</BodyStrong>
          <Body2>{hospital?.name}</Body2>
          <BodyStrong>병원 전화번호</BodyStrong>
          <Body2>{hospital?.phone}</Body2>
          <BodyStrong>병원 주소</BodyStrong>
          <Body2>{hospital?.address}</Body2>
          <BodyStrong>아이디</BodyStrong>
          <Body2>{hospital?.account_id}</Body2>
        </div>
        <hr />
        <_.Image src={hospital?.hospital_image} />
      </_.InformationTable>
    </_.Container>
  );
}

export default Info;
