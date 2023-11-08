import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 50px;
  column-gap: 30px;

  @media screen and (max-width: 1250px) {
    grid-template-columns: 1fr;
  }
`;
