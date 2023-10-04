import * as S from "./style";
import Layout from "components/pages/Landing/Layout";
import { BodyLarge, Title, TitleLarge } from "styles/text";
import { landingMock } from "assets/index";
import { IntroduceData } from "./introduce";
import Login from "components/pages/Landing/Login/login";
import SignUp from "components/pages/Landing/Login/signup";

function Landing() {
  return (
    <Layout>
      <S.Container>
        <Login />
        <SignUp/>
        <S.MainContainer>
          <TitleLarge>우울감 극복의 모든 것,</TitleLarge>
          <TitleLarge>SIGNAL에서 간편하게 해결하자</TitleLarge>
          <img src={landingMock} alt="landing page 목업사진" />
        </S.MainContainer>
        <S.IntroductionContainer>
          {IntroduceData.map((data) => (
            <S.EachInroduction key={data.title}>
              <img src={data.img} alt={data.title} />
              <S.IntroductionContent>
                <Title>{data.title}</Title>
                <BodyLarge>{data.content}</BodyLarge>
              </S.IntroductionContent>
            </S.EachInroduction>
          ))}
        </S.IntroductionContainer>
      </S.Container>
    </Layout>
  );
}

export default Landing;
