import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const ChildrenContainer = styled.div`
  margin-left: 260px;
  padding: 50px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  transition: 0.5s ease;

  @media screen and (max-width: 900px) {
    margin-left: 0px;  }
`;