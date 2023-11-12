import * as _ from "./style";
import SelectDate from "components/pages/hospital/AppointmentDetail/SelectDate";
import List from "components/pages/hospital/AppointmentDetail/List";
import Approval from "components/pages/hospital/AppointmentDetail/Approval";

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
