import { AuthInstance } from ".";

const router = "/report";

/** 버그제보 */
export const PostReportApi = async (reportData: {
  content: string;
  image: string;
}) => {
  await AuthInstance.post(`${router}`, reportData);
};
