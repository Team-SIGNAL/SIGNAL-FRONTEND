import styled from "styled-components";

const Body = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;
const Body2 = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;
const BodyStrong = styled(Body2)`
  font-weight: 600;
`;

const BodyLarge = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
const BodyLarge2 = styled(BodyLarge)`
  font-weight: 600;
`;

const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
`;
const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
`;
const TitleLarge = styled.p`
  font-size: 40px;
  font-weight: 600;
  line-height: 52px;
`;
const TitleLarge2 = styled.p`
  font-size: 48px;
  font-weight: 600;
  line-height: 92px;
`;

export {
  Body,
  Body2,
  BodyStrong,
  BodyLarge,
  BodyLarge2,
  SubTitle,
  Title,
  TitleLarge,
  TitleLarge2,
};
