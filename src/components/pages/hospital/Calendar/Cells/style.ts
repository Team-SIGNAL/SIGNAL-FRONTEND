import styled, { css } from "styled-components";
import Color from "styles/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

export const Weeks = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`;
export const Day = styled.div<{
  state: "disabled" | "not-valid" | "valid";
}>`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ state }) =>
    state === "disabled"
      ? css`
          color: ${Color.gray[400]};
        `
      : state === "not-valid"
      ? css`
          background-color: green;
        `
      : css`
          cursor: pointer;
          color: ${Color.black};
          &:first-child {
            color: #ff0000;
          }
          &:last-child {
            color: #007aff;
          }
          &:hover{
            background-color: ${Color.gray[100]};
          }
        `}
`;

export const Date = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const ClinicContainer = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    color: ${Color.gray[500]};
    align-items: center;
    gap: 5px;
    > p:first-child {
      @media (max-width: 1180px) {
        display: none;
      }
    }
  }
`;
