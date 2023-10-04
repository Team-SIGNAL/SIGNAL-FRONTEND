import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.div`

`
export const Logo = styled.img`
  width: 100px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: end;
  >div{
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${Color.gray[500]};
    >hr{
      width: 0px;
      height: 16px;
      border: 0.5px solid  ${Color.gray[500]};
    }
    >p{
      cursor: pointer;
    }
  }
`
