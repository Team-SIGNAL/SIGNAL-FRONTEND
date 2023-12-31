import Sidebar from "components/common/Sidebar";
import * as _ from "./style";
import { TitleLarge2 } from "styles/text";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { nowPathAtom } from "atoms/path";
import { useEffect, useState } from "react";

function Layout() {
  const path = useRecoilValue(nowPathAtom);
  const [pageName, setPageName ] = useState<string>("");
  useEffect(()=>{
    if(path[1] === "hospital" && path[2] === undefined) setPageName("")
    else if(path[1] === "admin" && path[2] === undefined) setPageName("병원 승인")
    else if(path[2] === "feed") setPageName("커뮤니티")
    else if(path[2] === "rec") setPageName("추천")
    else if(path[2] === "my") setPageName("병원 정보")
  },[path])
  return (
    <_.Container>
      <Sidebar />
      <_.ChildrenContainer>
        <TitleLarge2>{pageName}</TitleLarge2>
        <Outlet />
      </_.ChildrenContainer>
    </_.Container>
  );
}

export default Layout;
