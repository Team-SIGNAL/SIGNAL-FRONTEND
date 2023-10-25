import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.div`
  border-radius: 10px;
  border: 1px solid ${Color.gray[300]};
  padding: 10px;
  height: min-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: 50px;
  margin-top: 65px;
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  > p:nth-of-type(2) {
    color: ${Color.gray[500]};
  }
`;
export const InputContainer = styled.div`
  display: flex;
  gap: 5px;
`;
export const CommentButton = styled.button`
  background-color: ${Color.primary[300]};
  width: 70px;
  border: none;
  border-radius: 8px;
  color: ${Color.white};
  cursor: pointer;
  &:active {
    filter: brightness(1.1);
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 500px;
  overflow: auto;
`;
