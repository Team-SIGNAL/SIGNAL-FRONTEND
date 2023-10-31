import {
  GetFeedDataResType,
  GetFeedDataType,
  GetFeedListDataResType,
  GetFeedListDataType,
} from "types/feed.type";
import { AuthInstance } from "..";

const router = "/feed";

export const GetFeedList = async ({ tag, pagenum }: GetFeedListDataType) => {
  const { data }: GetFeedListDataResType = await AuthInstance.get(
    `/${router}/list?tag=${tag}?pagenum=${pagenum}`
  );
  return data;
};

export const GetFeed = async ({ id }: GetFeedDataType) => {
  const { data }: GetFeedDataResType = await AuthInstance.get(
    `${router}/${id}`
  );
  return data;
};
