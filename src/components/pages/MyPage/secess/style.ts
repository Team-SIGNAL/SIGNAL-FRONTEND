import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.div`
  display: flex;
  justify-content: end;
  > button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: ${Color.gray[400]};
  }
`;


