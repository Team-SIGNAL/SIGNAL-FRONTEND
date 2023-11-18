import FileInput from "components/common/FileInput";
import * as _ from "./style";
import Input from "components/common/Input";
import TextArea from "components/common/TextArea";
import React, { useState } from "react";
import { RecWriteReqType } from "types/rec.type";
import { useImageUpload } from "hooks/useImageUpload";

function Content() {
  const [data, setData] = useState<RecWriteReqType>({
    title: "",
    content: "",
    link: "",
    image: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const { uploadImage } = useImageUpload((image: string) => {
    setData({ ...data, image });
  });
  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) uploadImage(e.target.files[0]);
  };

  return (
    <_.Container>
      <Input
        placeholder="제목"
        name="title"
        label="제목"
        onChange={onChange}
        value={data.title}
      />
      <TextArea
        placeholder="내용"
        name="content"
        label="내용"
        height="300px"
        onChange={onChange}
        value={data.content}
      />
      <Input
        placeholder="링크 (https://youtube.com)"
        name="link"
        label="링크 (선택)"
        onChange={onChange}
        value={data.link}
      />
      <FileInput
        label="이미지"
        name="image"
        onChange={onChangeFile}
        value={data.image}
      />
    </_.Container>
  );
}

export default Content;
