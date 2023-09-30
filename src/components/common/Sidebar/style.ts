import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.nav`
  width: 260px;
  height: 100vh;
  background-color: ${Color.gray[100]};
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
  height: min-content;
  > img {
    width: 50px;
    height: 50px;
  }
`;

export const Line = styled.hr`
  width: 100%;
  height: 0px;

  border: 1px solid ${Color.gray[300]};
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

export const Menus = styled.button<{ select: boolean }>`
  background-color: ${({ select }) =>
    select ? Color.primary[500] : Color.gray[100]};
  color: ${({ select }) => (select ? Color.white : Color.gray[500])};
  border: none;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: start;
`;
