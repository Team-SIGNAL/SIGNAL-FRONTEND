import * as _ from "./style";
import { BodyStrong, SubTitle } from "styles/text";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { nowPathAtom } from "atoms/path";
import { defaultProfileImg } from "assets/index";
import { useQuery } from "@tanstack/react-query";
import { GetUserInfoApi } from "utils/apis/admin";
import ReportModal from "../Report";

function Sidebar() {
  const { pathname } = useLocation();
  const nav = useNavigate();
  const [path, setPath] = useRecoilState(nowPathAtom);
  const role = localStorage.getItem("ROLE");
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { data } = useQuery({
    queryKey: ["getInfo"],
    queryFn: GetUserInfoApi,
    retry: 0,
  });

  useEffect(() => {
    setPath(pathname.split("/"));
  }, [pathname, setPath]);

  return (
    <_.Container>
      {path[1] === "hospital" ? (
        <>
          <_.ProfileContainer onClick={() => nav("/hospital/my")}>
            <img src={data?.profile ?? defaultProfileImg} alt="profileImg" />
            <SubTitle>{data?.name}</SubTitle>
          </_.ProfileContainer>
          {role === "HOSPITAL" && (
            <_.MenuContainer>
              <BodyStrong>Menu</BodyStrong>
              <div>
                <_.Menus
                  $isselect={
                    path[2] !== "feed" && path[2] !== "rec" && path[2] !== "my"
                  }
                  onClick={() => nav("/hospital")}
                >
                  <BodyStrong>병원 예약</BodyStrong>
                </_.Menus>
                <_.Menus
                  $isselect={path[2] === "feed"}
                  onClick={() => nav("/hospital/feed")}
                >
                  <BodyStrong>커뮤니티</BodyStrong>
                </_.Menus>
                <_.Menus
                  $isselect={path[2] === "rec"}
                  onClick={() => nav("/hospital/rec")}
                >
                  <BodyStrong>추천</BodyStrong>
                </_.Menus>
              </div>
            </_.MenuContainer>
          )}
          <_.MenuContainer>
            <BodyStrong>User</BodyStrong>
            <div>
              <_.Menus
                $isselect={path[2] === "my"}
                onClick={() => nav("/hospital/my")}
              >
                <BodyStrong>병원 정보</BodyStrong>
              </_.Menus>
            </div>
            <div>
              <_.Menus
                $isselect={false}
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <BodyStrong>버그제보</BodyStrong>
              </_.Menus>
            </div>
          </_.MenuContainer>
        </>
      ) : (
        <>
          <_.MenuContainer>
            <BodyStrong>Menu</BodyStrong>
            <div>
              <_.Menus
                $isselect={path[2] !== "feed"}
                onClick={() => nav("/admin")}
              >
                <BodyStrong>계정 승인</BodyStrong>
              </_.Menus>
              <_.Menus
                $isselect={path[2] === "feed"}
                onClick={() => nav("/admin/feed")}
              >
                <BodyStrong>커뮤니티</BodyStrong>
              </_.Menus>
            </div>
          </_.MenuContainer>
          <_.MenuContainer>
            <BodyStrong>User</BodyStrong>
            <div>
              <_.Menus
                $isselect={false}
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <BodyStrong>버그제보</BodyStrong>
              </_.Menus>
            </div>
          </_.MenuContainer>
        </>
      )}
      {openModal && (
        <ReportModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </_.Container>
  );
}

export default Sidebar;
