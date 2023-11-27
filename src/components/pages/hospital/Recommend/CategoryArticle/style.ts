import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 10px;
  border: 1px solid ${Color.gray[400]};
  cursor: pointer;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
`;
