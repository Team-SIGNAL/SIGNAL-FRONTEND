import styled from "styled-components";
import Color from "styles/color";

export const DateList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${Color.gray[400]};
  border-bottom: 0px;
  padding: 10px;

  cursor: pointer;
  &:first-child{
    border-radius: 10px 10px 0px 0px;
  }
  &:last-child {
    border-bottom: 1px solid ${Color.gray[400]};
    border-radius: 0px 0px 10px 10px;
  }
  > div {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;