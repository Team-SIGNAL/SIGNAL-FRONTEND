import { useLocation, useNavigate } from "react-router-dom";
import * as _ from "./style";
import DateArrow from "components/common/DateArrow";
import { addDays, format, subDays } from "date-fns";
import { Title } from "styles/text";

function SelectDate() {
  const { pathname } = useLocation();
  const date = pathname.split("/")[2];
  const nowDate = new Date(date);
  const nav = useNavigate();

  return (
    <_.Container>
      <Title onClick={()=>nav('/hospital')}>{date}</Title>
      <DateArrow
        prev={() => {
          nav(`/hospital/${format(subDays(nowDate, 1), "yyyy-MM-dd")}`);
        }}
        now={() => {
          nav(`/hospital/${format(new Date(), "yyyy-MM-dd")}`);
        }}
        next={() => {
          nav(`/hospital/${format(addDays(nowDate, 1), "yyyy-MM-dd")}`);
        }}
      />
    </_.Container>
  );
}

export default SelectDate;
