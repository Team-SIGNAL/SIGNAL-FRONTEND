import { useNavigate } from "react-router-dom";
import * as _ from "./style";
import { Body2, BodyLarge2, BodyLarge } from "styles/text";
import StateBadge from "../StateBadge";
import { ReservationType } from "types/reservation.type";
import { differenceInYears } from "date-fns";

function ListArticle({
  id,
  name,
  birth,
  reservation_status,
  time,
}: ReservationType) {
  const nav = useNavigate();
  const today = new Date();
  const birthday = new Date(birth);

  return (
    <_.DateList onClick={() => nav(`?id=${id}`)}>
      <div>
        <BodyLarge2>{name}</BodyLarge2>
        <Body2>-</Body2>
        <BodyLarge>{differenceInYears(today, birthday)}세</BodyLarge>
      </div>
      <div>
        <BodyLarge>{time}</BodyLarge>
        <StateBadge state={reservation_status} />
      </div>
    </_.DateList>
  );
}
export default ListArticle;
