import * as _ from "./style";
import { IntroduceData } from "./introduce";
import { BodyLarge, Title, TitleLarge } from "styles/text";
import { landingMock } from "assets/index";
import Layout from "components/pages/Landing/Layout";
import SignUp from "components/pages/Landing/Auth/signup";
import SignIn from "components/pages/Landing/Auth/signin";

function Landing() {
  return (
    <Layout>
      <_.Container>
        <SignIn />
        <SignUp />
        <_.MainContainer>
          <TitleLarge>우울감 극복의 모든 것,</TitleLarge>
          <TitleLarge>SIGNAL에서 간편하게 해결하자</TitleLarge>
          <img src={landingMock} alt="landing page 목업사진" />
        </_.MainContainer>
        <_.IntroductionContainer>
          {IntroduceData.map((data) => (
            <_.EachInroduction key={data.title}>
              <img src={data.img} alt={data.title} />
              <_.IntroductionContent>
                <Title>{data.title}</Title>
                <BodyLarge>{data.content}</BodyLarge>
              </_.IntroductionContent>
            </_.EachInroduction>
          ))}
        </_.IntroductionContainer>
      </_.Container>
    </Layout>
  );
}

export default Landing;
