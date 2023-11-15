import { useNavigate } from "react-router-dom";
import * as _ from "./style";
import { Body2, BodyLarge2, BodyLarge } from "styles/text";
import StateBadge from "../StateBadge";
import { ReservationType } from "types/reservation.type";
import { differenceInYears, format, sub } from "date-fns";

function ListArticle({
  id,
  name,
  birth,
  dateTime,
  is_reservation,
}: ReservationType) {
  const nav = useNavigate();
  const today = new Date();
  const birthday = new Date(birth);
  const date = new Date(dateTime);
  console.log(date);
  return (
    <_.DateList onClick={() => nav(`?id=${id}`)}>
      <div>
        <BodyLarge2>{name}</BodyLarge2>
        <Body2>-</Body2>
        <BodyLarge>{differenceInYears(today, birthday)}세</BodyLarge>
      </div>
      <div>
        <BodyLarge>{format(date, "HH:mm:ss")}</BodyLarge>
        <StateBadge state={is_reservation} />
      </div>
    </_.DateList>
  );
}
export default ListArticle;
