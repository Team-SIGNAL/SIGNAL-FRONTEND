import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const ApprovalContainer = styled.div`
  border: 1px solid ${Color.gray[400]};
  border-radius: 10px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;
export const InformationTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  row-gap: 5px;
`;

export const ReasonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
