export type RefreshTokenResType = {
  access_token: string; // access token
  refresh_token: string; // refresh token
  expire_at: string; // refresh token 만료시간
  access_at: string; // access token 만료시간
};
