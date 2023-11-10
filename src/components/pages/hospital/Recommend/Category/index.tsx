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
        <_.Category onClick={() => nav("/hospital/rec?cat=music")}>
          <_.Background src={recMusicImg} />
          <_.CategoryTitle>노래 감상하기</_.CategoryTitle>
        </_.Category>
        <_.Category onClick={() => nav("/hospital/rec?cat=video")}>
          <_.Background src={recVideoImg} />
          <_.CategoryTitle>영상 시청하기</_.CategoryTitle>
        </_.Category>
        <_.Category onClick={() => nav("/hospital/rec?cat=sport")}>
          <_.Background src={recSprotImg} />
          <_.CategoryTitle>운동하기</_.CategoryTitle>
        </_.Category>
        <_.Category onClick={() => nav("/hospital/rec?cat=hobby")}>
          <_.Background src={recHobbyImg} />
          <_.CategoryTitle>취미 활동하기</_.CategoryTitle>
        </_.Category>
      </_.Container>
    </_.FlexContainer>
  );
}

export default Category;
