import { Body } from "styles/text";
import * as _ from "./style";
import { StateBadgeProps } from "./type";

function StateBadge({ state }: StateBadgeProps) {
  return (
    <_.Container state={state}>
      <Body>
        {state === "WAIT" ? "대기" : state === "APPROVE" ? "승인" : "거절"}
      </Body>
    </_.Container>
  );
}

export default StateBadge;
