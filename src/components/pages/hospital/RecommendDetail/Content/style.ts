import { Link } from "react-router-dom";
import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  background-color: green;
`;
export const EctContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 35%;
  > div {
    display: flex;
    justify-content: space-between;
  }
`;
export const Image = styled.img``;
export const LinkButton = styled(Link)`
  text-decoration: none;
  color: ${Color.black};
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* background-color: red; */
  width: 100%;
`;
export const Content = styled.pre`
  white-space: break-spaces;
`;
