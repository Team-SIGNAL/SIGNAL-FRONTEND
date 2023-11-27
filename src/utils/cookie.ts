import { Cookies } from "react-cookie";

const cookie = new Cookies();

export const setCookie = (
  name: string,
  value: boolean | string,
  expires: Date
) => cookie.set(name, value, { expires, path: "/" });

export const getCookie = (name: string) => cookie.get(name);

export const delCookie = (name: string) => cookie.remove(name, { path: "/" });
