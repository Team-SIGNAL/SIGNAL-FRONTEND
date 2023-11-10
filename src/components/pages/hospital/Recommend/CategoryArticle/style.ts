import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid ${Color.gray[400]};
  cursor: pointer;
`;
