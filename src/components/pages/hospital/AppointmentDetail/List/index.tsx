import { useLocation, useNavigate } from "react-router-dom";
import * as _ from "./style";
import { Body2, BodyLarge, BodyLarge2 } from "styles/text";
import StateBadge from "../StateBadge";

function List() {
  const { pathname, search } = useLocation();
  const date = pathname.split("/")[2];
  const nav = useNavigate();

  return (
    <_.Container>
      <_.DateList onClick={() => nav("?id=1")}>
        <div>
          <BodyLarge2>홍길동</BodyLarge2>
          <Body2>-</Body2>
          <BodyLarge>16세</BodyLarge>
        </div>
        <div>
          <BodyLarge>17:30</BodyLarge>
          <StateBadge state="Approval" />
        </div>
      </_.DateList>
      <_.DateList onClick={() => nav("?id=2")}>
        <div>
          <BodyLarge2>홍길동</BodyLarge2>
          <Body2>-</Body2>
          <BodyLarge>16세</BodyLarge>
        </div>
        <div>
          <BodyLarge>17:30</BodyLarge>
          <StateBadge state="Approval" />
        </div>
      </_.DateList>
      <_.DateList onClick={() => nav("?id=3")}>
        <div>
          <BodyLarge2>홍길동</BodyLarge2>
          <Body2>-</Body2>
          <BodyLarge>16세</BodyLarge>
        </div>
        <div>
          <BodyLarge>17:30</BodyLarge>
          <StateBadge state="StandBy" />
        </div>
      </_.DateList>
    </_.Container>
  );
}

export default List;
