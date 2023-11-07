import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getCookie } from "utils/cookie";
import { alertWarning } from "utils/toastify";

function ProctedRoute() {
  const refreshToken = getCookie("refresh_token");
  const nav = useNavigate();
  useEffect(() => {
    if (!refreshToken) {
      alertWarning("로그인 후 이용 가능합니다.");
      nav("/");
    }
  }, [nav, refreshToken]);

  return <>{refreshToken && <Outlet />}</>;
}

export default ProctedRoute;
