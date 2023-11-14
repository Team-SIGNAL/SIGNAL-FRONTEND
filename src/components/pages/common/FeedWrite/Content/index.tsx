import * as _ from "./style";
import Input from "components/common/Input";
import TextArea from "components/common/TextArea";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  FeedContentAtom,
  FeedIdAtom,
  FeedImageAtom,
  FeedTitleAtom,
} from "atoms/feed";
import { ChangeEvent, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
// import { GetFeed } from "utils/apis/poop/feed";

function Content() {
  const [title, setTitle] = useRecoilState(FeedTitleAtom);
  const [content, setContent] = useRecoilState(FeedContentAtom);
  const setFile = useSetRecoilState(FeedImageAtom);

  const id = useRecoilValue(FeedIdAtom);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const { refetch, data } = useQuery({
    queryKey: ["getFeed", { id }],
    queryFn: () => {},
    // queryFn: () => GetFeed({ id }),
    retryOnMount: false,
    retry: 1,
    enabled: false,
  });

  useEffect(() => {
    if (id) {
      refetch();
    }
  }, [id, refetch]);

  // useEffect(() => {
  //   if (data) {
  //     setTitle(data.feed.title);
  //     setContent(data.feed.content);
  //     setFile(data.feed.img);
  //   }
  // }, [data, setContent, setFile, setTitle]);

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
      <_.FileInput type="file" accept="image/*" onChange={handleFileChange} />
    </_.Container>
  );
}

export default Content;
