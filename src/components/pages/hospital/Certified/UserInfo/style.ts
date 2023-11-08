import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  border-bottom: 1px solid ${Color.gray[400]};
  padding-bottom: 20px;
`;

export const InformationTable = styled.div`
  width: 85%;
  display: grid;
  grid-template-columns: 1fr 5fr;
  row-gap: 5px;
`;
