import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  row-gap: 50px;
  column-gap: 30px;

  @media screen and (max-width: 1250px) {
    grid-template-columns: 1fr;
  }
`;
