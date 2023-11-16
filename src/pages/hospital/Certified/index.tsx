import * as _ from "./style";
import UserInfo from "components/pages/hospital/Certified/UserInfo";
import SubmitDocument from "components/pages/hospital/Certified/SubmitDocument";
import { useQuery } from "@tanstack/react-query";
import { GetUserInfoApi } from "utils/apis/admin";

function Certified() {
  const { data } = useQuery({
    queryKey: ["getInfo"],
    queryFn: GetUserInfoApi,
    retry: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return (
    <_.FlexContainer>
      <_.Container>
        <UserInfo name={data?.name} phone={data?.phone} />
        <SubmitDocument requestStatus={data?.auth_status} />
      </_.Container>
    </_.FlexContainer>
  );
}

export default Certified;
