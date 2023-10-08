import { Cookies } from "react-cookie";

const cookie = new Cookies();

export const setCookie = (
  name: string,
  value: boolean | string,
  expires: string,
  option: any = { path: "/" }
) => cookie.set(name, value, { expires, ...option });

export const getCookie = (name: string) => cookie.get(name);

export const delCookie = (name: string, option: any) =>
  cookie.remove(name, { ...option });