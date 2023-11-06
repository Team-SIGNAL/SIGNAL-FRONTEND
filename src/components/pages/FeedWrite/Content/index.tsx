import Input from "components/common/Input";
import * as _ from "./style";
import TextArea from "components/common/TextArea";
import { useRecoilState } from "recoil";
import { FeedContentAtom, FeedTitleAtom } from "atoms/feed";

function Content() {
  const [title, setTitle] = useRecoilState(FeedTitleAtom);
  const [content, setContent] = useRecoilState(FeedContentAtom);

  return (
    <_.Container>
      <Input
        label="제목"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextArea
        height="400px"
        label="내용"
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </_.Container>
  );
}

export default Content;
