import { Body } from "styles/text";
import * as _ from "./style";
import { StateBadgeProps } from "./type";

function StateBadge({ state }: StateBadgeProps) {
  return (
    <_.Container state={state}>
      <Body>
        {state === "Approval" ? "확정" : state === "StandBy" && "대기"}
      </Body>
    </_.Container>
  );
}

export default StateBadge;
