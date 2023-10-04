import styled from "styled-components";
import Color from "./color";

export const Button = styled.button`
  display: flex;
  background-color: ${Color.primary[300]};
  color: ${Color.white};
  padding: 12px;
  width: 100%;
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  font-weight: 600;
  &:active{
    filter: brightness(1.1);
  }
`;
