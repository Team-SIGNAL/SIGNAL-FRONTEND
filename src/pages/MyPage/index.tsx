import Layout from "layout";
import * as _ from "./style";
import Profile from "components/pages/MyPage/profile";
import Secess from "components/pages/MyPage/secess";

function MyPage() {

  return (
    <Layout>
      <_.Container>
        <Profile />
        <Secess/>
      </_.Container>
    </Layout>
  );
}

export default MyPage;
