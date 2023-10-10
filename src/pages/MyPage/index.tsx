import Layout from "layout";
import * as S from "./style";
import Profile from "components/pages/MyPage/profile";
import Secess from "components/pages/MyPage/secess";

function MyPage() {

  return (
    <Layout>
      <S.Container>
        <Profile />
        <Secess/>
      </S.Container>
    </Layout>
  );
}

export default MyPage;
