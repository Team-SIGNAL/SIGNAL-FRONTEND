import styled from "styled-components";
import Color from "styles/color";

export const Conatainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px 30px 20px;
  align-items: center;
`;

export const MonthContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ArrowContainer = styled.div`
  display: flex;
  gap: 3px;
  > button {
    border: none;
    cursor: pointer;
    width: 25px;
    height: 25px;
    padding: 5px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: ${Color.gray[400]};
    }
    &:active {
      background-color: ${Color.gray[300]};
    }
    > svg {
      width: 100%;
      height: min-content;
    }
    &:nth-child(2){
      width: 50px;
      color: ${Color.gray[500]};
      background-color:transparent;
      border-radius: 0;
      &:hover{
        color: ${Color.black};
      }
      &:active{
        color: ${Color.gray[500]};
      }
    }
  }
`;
