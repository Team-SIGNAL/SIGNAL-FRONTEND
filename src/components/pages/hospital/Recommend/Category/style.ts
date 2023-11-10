import styled from "styled-components";
import Color from "styles/color";
import { Title } from "styles/text";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 80%;
`;
export const Category = styled.div`
  display: flex;
  position: relative;
  height: 200px;
  border-radius: 10px;
  justify-content: end;
  align-items: end;
  cursor: pointer;
`;

export const CategoryTitle = styled(Title)`
  margin: 10px;
  color: ${Color.white};
`;
export const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  z-index: -1;
`;
