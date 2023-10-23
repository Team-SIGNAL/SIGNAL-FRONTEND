import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  cursor: pointer;
  > p:nth-of-type(1) {
    color: ${Color.gray[400]};
  }
`;

export const SummaryImg = styled.img`
  width: 100%;
`;
