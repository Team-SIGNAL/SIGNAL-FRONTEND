import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosInstance } from "axios";
import { AUTH_URL } from "constants/config";
import { delCookie, getCookie, setCookie } from "utils/cookie";
import { PutLogin } from "./users";
import { alertError } from "utils/toastify";

export const AuthInstance: AxiosInstance = axios.create({
  baseURL: AUTH_URL,
  timeout: 10000,
});

AuthInstance.interceptors.request.use(
  (config) => {
    const accessToken = getCookie("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const DefaultInstance: AxiosInstance = axios.create({
  baseURL: AUTH_URL,
  timeout: 10000,
});

AuthInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<AxiosError>) => {
    if (axios.isAxiosError(error) && error.response) {
      const { status } = error.response.data;
      const refreshToken = getCookie("refresh_token");

      if (status === 403) {
        if (refreshToken) {
          const { mutate: loginMutate } = useMutation(PutLogin, {
            onSuccess: (res) => {
              setCookie(
                "access_token",
                res.data.access_token,
                res.data.expire_at
              );
              setCookie(
                "refresh_token",
                res.data.refresh_token,
                res.data.expire_at
              );

              if (error.config) {
                error.config.headers.Authorization = `Bearer ${res.data.accessToken}`;
                return axios.request(error.config);
              }
            },
            onError: (err) => {
              alertError("로그인이 필요한 서비스입니다.")
            },
          });

          loginMutate();
        } else {
          delCookie("access_token");
          delCookie("refresh_token");
          throw error;
        }
      } else {
        throw error;
      }
    } else {
      throw error;
    }
  }
);
