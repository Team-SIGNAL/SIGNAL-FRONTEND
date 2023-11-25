import { Link } from "react-router-dom";
import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
export const EctContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  > div {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 1050px) {
    width: 100%;
  }
`;
export const Image = styled.img`
  width: 200px;
`;
export const LinkButton = styled(Link)`
  text-decoration: none;
  color: ${Color.black};
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  > div {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
`;
export const Content = styled.pre`
  white-space: break-spaces;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
