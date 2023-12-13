import styled from "styled-components";
import Color from "styles/color";
import { Title } from "styles/text";

export const FlexContainer = styled.div`
  display: flex;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
`;
export const Category = styled.div<{ image?: any }>`
  display: flex;
  height: 200px;
  border-radius: 10px;
  justify-content: end;
  align-items: end;
  cursor: pointer;
  width: 100%;
  background-image: url(${(props) => props.image});
  background-size: 100% 200px;
  background-repeat: no-repeat;
`;

export const CategoryTitle = styled(Title)`
  margin: 10px;
  color: ${Color.white};
`;
export const Background = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  z-index: -1;
`;
