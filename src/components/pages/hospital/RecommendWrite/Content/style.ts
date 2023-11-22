import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SelectCatagoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  >label{
    color: ${Color.gray[500]};
  }
`