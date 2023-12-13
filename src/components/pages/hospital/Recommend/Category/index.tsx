import {
  recHobbyImg,
  recMusicImg,
  recSprotImg,
  recVideoImg,
} from "assets/index";
import * as _ from "./style";
import { useNavigate } from "react-router-dom";

function Category() {
  const nav = useNavigate();
  return (
    <_.FlexContainer>
      <_.Container>
        <_.Category
          onClick={() => nav("/hospital/rec?cat=music")}
          image={recMusicImg}
        >
          <_.CategoryTitle>노래 감상하기</_.CategoryTitle>
        </_.Category>
        <_.Category
          onClick={() => nav("/hospital/rec?cat=video")}
          image={recVideoImg}
        >
          <_.CategoryTitle>영상 시청하기</_.CategoryTitle>
        </_.Category>
        <_.Category
          onClick={() => nav("/hospital/rec?cat=sport")}
          image={recSprotImg}
        >
          <_.CategoryTitle>운동하기</_.CategoryTitle>
        </_.Category>
        <_.Category
          onClick={() => nav("/hospital/rec?cat=hobby")}
          image={recHobbyImg}
        >
          <_.CategoryTitle>취미 활동하기</_.CategoryTitle>
        </_.Category>
      </_.Container>
    </_.FlexContainer>
  );
}

export default Category;
