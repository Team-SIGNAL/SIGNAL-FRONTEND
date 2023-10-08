import styled from "styled-components";
import Color from "./color";

export const Button = styled.button<{
  backColor?: string;
  color?: string;
  width?: string;
}>`
  display: flex;
  color: ${({ color }) => (color ? color : Color.white)};
  background-color: ${({ backColor }) =>
    backColor ? backColor : Color.primary[300]};
  padding: 12px;
  width: ${({ width }) => (width ? width : "100%")}%;
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  font-weight: 600;
  &:active {
    filter: brightness(1.1);
  }
`;
