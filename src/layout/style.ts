import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const ChildrenContainer = styled.div`
  margin-left: 260px;
  padding: 50px 100px;
  height: 100vh;
=======
  padding: 50px 80px;
>>>>>>> Stashed changes

  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  transition: 0.5s ease;
  @media screen and (max-width: 900px) {
    margin-left: 0px;
  }
`;
