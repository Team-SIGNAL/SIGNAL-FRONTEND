import styled from "styled-components";
import Color from "styles/color";

export const ArrowContainer = styled.div`
  display: flex;
  gap: 3px;
`;
export const ArrowButton = styled.button`
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
`;

export const TodayButton = styled.button`
  cursor: pointer;
  width: 50px;
  color: ${Color.gray[600]};
  background-color: ${Color.gray[200]};
  border: none;
  border-radius: 20px;
  &:hover {
    color: ${Color.black};
  }
  &:active {
    color: ${Color.gray[500]};
  }
`;
