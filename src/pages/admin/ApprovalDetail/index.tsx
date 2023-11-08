import * as _ from "./style";
import Approve from "components/pages/admin/ApprovalDetail/Approve";
import Info from "components/pages/admin/ApprovalDetail/Info";

function ApprovalDetail() {
  return (
    <_.Container>
      <Info />
      <Approve />
    </_.Container>
  );
}

export default ApprovalDetail;
