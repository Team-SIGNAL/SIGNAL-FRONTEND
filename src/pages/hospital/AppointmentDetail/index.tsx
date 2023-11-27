import * as _ from "./style";
import SelectDate from "components/pages/hospital/AppointmentDetail/SelectDate";
import List from "components/pages/hospital/AppointmentDetail/List";
import Approval from "components/pages/hospital/AppointmentDetail/Approval";
import { useSearchParams } from "react-router-dom";

function AppointmentDetail() {
  const [seachParams] = useSearchParams();
  const id = seachParams.get("id");

  return (
    <_.Container>
      <SelectDate />
      <div></div>
      <List />
      {id&& <Approval id={id}/>}
    </_.Container>
  );
}

export default AppointmentDetail;
