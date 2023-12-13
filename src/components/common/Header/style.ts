import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.div`
  width: 100vw;
  padding: 10px 10vw;
  background-color: ${Color.white};

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  z-index: 10;
`;
export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: ${Color.gray[500]};
  > p {
    cursor: pointer;
  }
`;
