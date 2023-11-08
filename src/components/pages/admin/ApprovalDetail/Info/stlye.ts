import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InformationTable = styled.div`
  width: 85%;
  border: 1px solid ${Color.gray[500]};
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  > div {
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 5px;
    width: 85%;
    > p:nth-child(2n-1) {
      min-width: max-content;
    }
  }
  > hr {
    width: 90%;
    border: 1px solid ${Color.gray[400]};
  }
`;

export const Image = styled.img`
width: 70%;
`