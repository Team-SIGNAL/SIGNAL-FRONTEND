import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.div``;
export const ReportContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  gap: 2px;
  color: ${Color.gray[400]};
  cursor: pointer;
  > svg {
    width: 12px;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
