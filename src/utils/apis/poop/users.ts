import axios from "axios";
import { AUTH_URL } from "constants/config";
import { getCookie } from "utils/cookie";
const router = "/users";

/** 토큰 재발급 */
export const PutLogin = async () => {
  const refreshToken = getCookie("refresh_token");

  const res = await axios.put(`${AUTH_URL}${router}/login`, {
    headers: {
      "Refresh-Token": `Bearer ${refreshToken}`,
    },
  });

  return res;
};
