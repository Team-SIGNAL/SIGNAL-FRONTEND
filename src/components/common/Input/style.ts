import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${Color.gray[500]};
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid ${Color.gray[400]};
  border-radius: 8px;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  outline: none;
`;
