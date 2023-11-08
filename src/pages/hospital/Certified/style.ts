import styled from "styled-components";
import Color from "styles/color";

export const FlexContainer = styled.div`
  width: 100vw;
  padding: 10vh 0px;

  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  border: 1px solid ${Color.gray[400]};
  border-radius: 20px;
  padding: 20px;
  width: 50vw;
`;
