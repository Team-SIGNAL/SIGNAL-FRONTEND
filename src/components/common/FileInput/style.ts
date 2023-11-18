import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3px;
`;

export const Label = styled.label`
  color: ${Color.gray[500]};
  cursor: pointer;
`;