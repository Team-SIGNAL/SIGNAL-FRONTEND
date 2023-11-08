import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
`;

export const MainContainer = styled.div`
  height: 95vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  >img{
    width: 55vw;
    margin-top: 30px;
  }
`

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-bottom: 200px;
`
export const EachInroduction = styled.div`
  min-height: 40vh;
  display: flex;
  align-items: center;
  gap: 50px;
  >img{
    width: 300px;
  }
  @media screen and (max-width: 1048px){
    flex-direction: column;
  }
`
export const IntroductionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  >p{
    width: 40vw;
  }
`