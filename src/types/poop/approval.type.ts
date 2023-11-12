/** axios res 병원 승인 리스트 */
export type getApprovalList = {
  data: { approve_request_list: approvalList[] };
};

/** 병원 승인 리스트 목록 */
export type approvalList = {
  id: number;
  name: string;
  phone: string;
};
