import styled from "styled-components";
import { StateBadgeProps } from "./type";
import Color from "styles/color";

export const Container = styled.div<StateBadgeProps>`
  background-color: ${({ state }) =>
    state === "APPROVE"
      ? Color.primary[100]
      : state === "STAND_BY"
      ? Color.gray[500]
      : "red"};
  color: ${Color.white};
  padding: 2px 5px;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
