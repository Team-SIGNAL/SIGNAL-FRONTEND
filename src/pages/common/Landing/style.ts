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

  animation-name: slidein;
  animation-duration: 1s;
  animation-timing-function: ease-out;

  > img {
    width: 55vw;
    margin-top: 30px;
  }

  @keyframes slidein {
    0% {
      transform: translateX(1000%);
    }
    90% {
      transform: translateX(0%);
    }
    95% {
      transform: translateX(5%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-bottom: 200px;
`;
export const EachInroduction = styled.div<{ delay: number }>`
  min-height: 40vh;
  display: flex;
  align-items: center;
  gap: 50px;
  > img {
    width: 300px;
  }
  @media screen and (max-width: 1048px) {
    flex-direction: column;
  }
  opacity: 0;
  animation: 2s;
  animation-name: fadein;
  animation-delay: ${({ delay }) => delay}s;
  animation-fill-mode: forwards;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const IntroductionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  > p {
    width: 40vw;
  }
`;
