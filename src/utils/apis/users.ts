import axios from "axios";
import { getCookie } from "utils/cookie";
import { AUTH_URL } from "constants/config";
import { RefreshTokenResType } from "types/users.type";

const router = "/users";

/** 토큰 재발급 */
export const PutRefreshTokenApi = async () => {
  const refreshToken = getCookie("refresh_token");

  const { data }: { data: RefreshTokenResType } = await axios.put(
    `${AUTH_URL}${router}/login`,
    {
      headers: {
        "Refresh-Token": `Bearer ${refreshToken}`,
      },
    }
  );

  return data;
};
