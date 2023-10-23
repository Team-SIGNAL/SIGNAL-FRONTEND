import styled from "styled-components";
import Color from "styles/color";

export const Select = styled.select`
  font-size: 16px;
  font-weight: 400px;
  line-height: 24px;

  padding: 12px;
  border-radius: 8px;

  background-color: ${Color.gray[200]};
  outline: none;

  cursor: pointer;
`;
