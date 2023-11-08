import styled from "styled-components";
import Color from "styles/color";
export const Contianer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const DateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`;

export const Date = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Color.gray[500]};
  &:first-child {
    color: #ff0000;
  }
  &:last-child {
    color: #007aff;
  }
`;


export const Line = styled.hr`
  width: 100%;
  border: 1px solid ${Color.gray[200]};
`;
