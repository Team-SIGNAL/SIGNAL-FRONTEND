import Layout from "layout";
import * as S from "./style";
import Profile from "components/pages/MyPage/profile";

function MyPage() {
  return (
    <Layout>
      <S.Container>
        <Profile/>

      </S.Container>
    </Layout>
  );
}

export default MyPage;
