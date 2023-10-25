import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ReportContainer = styled.div`
  display: flex;
  align-items: center;
  gap:2px;
  color: ${Color.gray[400]};
  cursor: pointer;
  >svg{
    width: 12px;
  }
`