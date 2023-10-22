import * as S from "./style";
import Profile from "components/pages/MyPage/profile";
import Secess from "components/pages/MyPage/secess";

function MyPage() {

  return (
      <S.Container>
        <Profile />
        <Secess/>
      </S.Container>
  );
}

export default MyPage;
