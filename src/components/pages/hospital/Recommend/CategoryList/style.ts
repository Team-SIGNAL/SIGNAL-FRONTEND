import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BackArrowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${Color.gray[500]};
  width: fit-content;
  cursor: pointer;
`;
