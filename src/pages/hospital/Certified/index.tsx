import * as _ from "./style";
import UserInfo from "components/pages/hospital/Certified/UserInfo";
import SubmitDocument from "components/pages/hospital/Certified/SubmitDocument";
import { useQuery } from "@tanstack/react-query";
import { GetUserInfoApi } from "utils/apis/admin";
import { useNavigate } from "react-router-dom";
import { alertSuccess } from "utils/toastify";

function Certified() {
  const { data } = useQuery({
    queryKey: ["getInfo"],
    queryFn: GetUserInfoApi,
    retry: 0,
  });
  const nav = useNavigate();
  if(data?.auth_status === "VERIFIED"){
    nav('/')
    alertSuccess("병원 인증에 성공하였습니다. 다시 로그인을 진행해주세요")
  }

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
