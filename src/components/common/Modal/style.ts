import styled from "styled-components";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const Container = styled.div`
  background-color: white;
  min-width: 450px;
  padding: 40px;
  border-radius: 10px;
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
