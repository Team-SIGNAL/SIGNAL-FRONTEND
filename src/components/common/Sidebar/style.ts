import styled, { css } from "styled-components";
import Color from "styles/color";

export const Container = styled.nav`
  width: 260px;
  height: 100vh;
  background-color: #e3f9e6;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  position: fixed;
  transition: 0.5s ease;
  left: 0;
  top: 0;

  @media screen and (max-width: 900px) {
    left: -260px;
  }
  &.open {
    left: 0;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  height: 70px;
  > img {
    width: 50px;
    height: 50px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  > p {
    color: ${Color.gray[500]};
  }
  > div {
    display: flex;
    flex-direction: column;
  }
`;

export const Menus = styled.button<{ $isselect: boolean }>`
  ${({ $isselect }) =>
    $isselect
      ? css`
          background-color: ${Color.primary[100]};
          color: ${Color.white};
          &:hover {
            filter: brightness(1.1);
          }
          &:active {
            filter: brightness(1);
          }
        `
      : css`
          background-color: transparent;
          color: ${Color.gray};
          &:hover {
            color: ${Color.primary[100]};
            background-color: white;
          }
          &:active{
            filter: brightness(0.97);
          }
        `};
  transition: 0.1s;
  border: none;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: start;
`;
