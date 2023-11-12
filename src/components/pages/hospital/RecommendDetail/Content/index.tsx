import { Body2, Title } from "styles/text";
import * as _ from "./style";

const data = {
  link: "https://www.youtube.com/watch?v=5g4KsIizYhQ",
  image: "https://image.yes24.com/goods/70861317/XL",
  content:
    "나는 읽기 쉬운 마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야 마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야마음이야\n당신도 쓱 훑고 가셔요\n달랠 길 없는 외로운 마음 있지\n머물다 가셔요\n내게 긴 여운을 남겨줘요\n사랑을, 사랑을 해줘요\n할 수 있다면 그럴 수만 있다면\n새하얀 빛으로 그댈 비춰 줄게요\n그러다 밤이 찾아오면\n우리 둘만의 비밀을 새겨요\n추억할 그 밤 위에 갈피를 꽂고선\n남몰래 펼쳐보아요\n나의 자라나는 마음을\n못 본채 꺾어 버릴 순 없네\n미련 남길 바엔 그리워 아픈 게 나아\n서둘러 안겨본 그 품은 따스할 테니\n그러다 밤이 찾아오면\n우리 둘만의 비밀을 새겨요\n추억할 그 밤 위에 갈피를 꽂고선\n남몰래 펼쳐보아요\n언젠가 또 그날이 온대도\n우린 서둘러 뒤돌지 말아요\n마주 보던 그대로 뒷걸음치면서\n서로의 안녕을 보아요\n피고 지는 마음을 알아요\n다시 돌아온 계절도\n난 한동안 새 활짝 피었다 질래\n또 한 번 영원히\n그럼에도 내 사랑은 또 같은 꿈을 꾸고\n(라 라라라 라랄라 랄라라라)\n그럼에도 꾸던 꿈을 난 또 미루진 않을 거야\n(라 라라라 라랄라 랄라라라)",
  time: "2분 29초",
  title: "주저하는 연인들을 위해 - 잔나비",
  category: "MUSIC",
};

function Content() {
  return (
    <_.Container>
      <_.EctContainer>
        <_.Image src={data.image} />
        <div>
          <_.LinkButton to={data.link}>
            <Body2>🔗 링크</Body2>
          </_.LinkButton>
          <Body2>예상 소요 시간 : {data.time}</Body2>
        </div>
      </_.EctContainer>
      <_.ContentContainer>
        <Title>{data.title}</Title>
        <_.Content>{data.content}</_.Content>
      </_.ContentContainer>
    </_.Container>
  );
}

export default Content;
