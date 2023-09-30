import styled from "styled-components";
import Color from "./color";

export const Button = styled.button`
  display: flex;
  background-color: ${Color.primary[300]};
  color: ${Color.white};
  padding: 12px;
  width: 100%;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  font-weight: 600;
`;
