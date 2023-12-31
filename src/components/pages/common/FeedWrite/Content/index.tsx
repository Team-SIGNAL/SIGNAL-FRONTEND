import * as _ from "./style";
import Input from "components/common/Input";
import TextArea from "components/common/TextArea";
import { useRecoilState } from "recoil";
import { FeedContentAtom, FeedShowImageAtom, FeedTitleAtom } from "atoms/feed";
import { ChangeEvent, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { GetFeedDetailApi } from "utils/apis/feed";
import { useImageUpload } from "hooks/useImageUpload";

function Content() {
  const [title, setTitle] = useRecoilState(FeedTitleAtom);
  const [content, setContent] = useRecoilState(FeedContentAtom);
  const [image, setImage] = useRecoilState(FeedShowImageAtom);

  const [seachParams] = useSearchParams();
  const id = seachParams.get("id");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      uploadImage(e.target.files[0]);
    }
  };

  const { uploadImage } = useImageUpload((image: string) => {
    setImage(image);
  });

  const { refetch, data } = useQuery({
    queryKey: ["getFeed", id],
    queryFn: () => GetFeedDetailApi(id ?? ""),
    retry: 1,
    enabled: false,
  });

  useEffect(() => {
    if (id) {
      refetch();
    }
  }, [id, refetch]);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setContent(data.content);
      setImage(data.image);
    }
  }, [data, setContent, setTitle, setImage]);

  return (
    <_.Container>
      {image && <_.ShowImage src={image} />}
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
