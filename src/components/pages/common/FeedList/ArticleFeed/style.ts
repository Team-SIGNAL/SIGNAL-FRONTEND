import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  cursor: pointer;
  > div {
    display: flex;
    justify-content: space-between;
    > p:last-child {
      color: ${Color.gray[400]};
    }
  }
`;

export const SummaryImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
