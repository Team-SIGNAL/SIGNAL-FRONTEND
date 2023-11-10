import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const HeadertContianer = styled.div`
  display: flex;
  gap: 20px;
`;
export const BackArrowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${Color.gray[500]};
  width: fit-content;
  cursor: pointer;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
