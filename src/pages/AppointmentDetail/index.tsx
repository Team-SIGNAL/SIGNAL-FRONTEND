import * as _ from "./style";
import SelectDate from "components/pages/AppointmentDetail/SelectDate";
import List from "components/pages/AppointmentDetail/List";
import Approval from "components/pages/AppointmentDetail/Approval";

function AppointmentDetail() {
  return (
    <_.Container>
      <SelectDate />
      <div></div>
      <List />
      <Approval />
    </_.Container>
  );
}

export default AppointmentDetail;
