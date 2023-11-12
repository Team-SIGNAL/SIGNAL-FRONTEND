import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;

  border: 1px solid ${Color.gray[400]};
  border-bottom: 0px;
  &:first-child {
    border-radius: 5px 5px 0px 0px;
  }
  &:last-child {
    border-bottom: 1px solid ${Color.gray[400]};
    border-radius: 0px 0px 5px 5px;
  }

  cursor: pointer;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;
