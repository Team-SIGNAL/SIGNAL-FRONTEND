import styled from "styled-components";

export const Container = styled.div`
  gap: 40px 14px;
  width: 100%;
  display: grid;
  grid-template-columns:1fr;
  grid-template-rows:auto;

  @media screen and (min-width:650px){
    grid-template-columns:repeat(2, 1fr);
  }
  @media screen and (min-width: 1250px){
    grid-template-columns:repeat(3, 1fr);
  }
  @media screen and (min-width: 1450px){
    grid-template-columns:repeat(4, 1fr);
  }
`