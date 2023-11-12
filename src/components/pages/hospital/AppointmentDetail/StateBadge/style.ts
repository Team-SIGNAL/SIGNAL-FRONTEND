import styled from "styled-components";
import { StateBadgeProps } from "./type";
import Color from "styles/color";

export const Container = styled.div<StateBadgeProps>`
  background-color: ${({ state }) =>
    state === "Approval"
      ? Color.primary[100]
      : state === "StandBy" && Color.gray[500]};
  color: ${Color.white};
  padding: 2px 5px;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
