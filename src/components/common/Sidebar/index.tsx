import * as _ from "./style";
import { BodyStrong, SubTitle } from "styles/text";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { nowPathAtom } from "atoms/path";
import { defaultProfileImg } from "assets/index";

function Sidebar() {
  const { pathname } = useLocation();
  const nav = useNavigate();
  const [path, setPath] = useRecoilState(nowPathAtom);
  const role = localStorage.getItem("ROLE");

  useEffect(() => {
    setPath(pathname.split("/"));
  }, [pathname, setPath]);

  return (
    <_.Container>
      {path[1] === "hospital" ? (
        <>
          <_.ProfileContainer onClick={() => nav("/hospital/my")}>
            <img src={defaultProfileImg} alt="profileImg" />
            <SubTitle>가나다라 병원</SubTitle>
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
          </_.MenuContainer>
        </>
      ) : (
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
      )}
    </_.Container>
  );
}

export default Sidebar;
