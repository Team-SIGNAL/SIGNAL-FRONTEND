import styled from "styled-components";
import Color from "styles/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    justify-content: center;
    align-items: flex-end;
    > svg {
      cursor: pointer;
    }
  }
`;

export const FeedImg = styled.img`
  width: 100%;
  height: 400px;

  object-fit: cover;
`;

export const FeedContent = styled.pre`
  width: 100%;
  white-space: break-spaces;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`

export const ReportContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  gap:2px;
  color: ${Color.gray[400]};
  cursor: pointer;
  >svg{
    width: 12px;
  }
`