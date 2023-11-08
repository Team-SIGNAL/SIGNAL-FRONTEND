import styled from "styled-components";
import Color from "styles/color";
import { Body } from "styles/text";

export const Contianer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Explain = styled.div`
  display: flex;
  > p:last-child {
    color: ${Color.gray[500]};
  }
`;
export const SubmitContainer = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background-color: ${Color.gray[400]};
  border: none;
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  > p {
    color: ${Color.black};
  }
  &:hover {
    filter: brightness(1.05);
  }
  &:active {
    filter: brightness(1);
  }
`;
export const PlusButton = styled.div`
  background-color: ${Color.white};
  border-radius: 50%;
  width: fit-content;
  height: fit-content;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    width: 15px;
    height: 15px;
  }
`;

export const FileInput = styled.input`
  display: none;
`

export const SmallExplain = styled(Body)`
  align-self: flex-end;
`