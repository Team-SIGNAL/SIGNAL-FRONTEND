import FileInput from "components/common/FileInput";
import * as _ from "./style";
import Input from "components/common/Input";
import TextArea from "components/common/TextArea";
import React, { useEffect } from "react";
import { RecWriteReqType } from "types/rec.type";
import { useImageUpload } from "hooks/useImageUpload";
import { useRecoilState } from "recoil";
import { RecWriteAtom } from "atoms/rec";
import Selector from "components/common/Selecter";

function Content() {
  const [data, setData] = useRecoilState<RecWriteReqType>(RecWriteAtom);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const { uploadImage } = useImageUpload((image: string) => {
    console.log(image);
    setData({ ...data, image });
  });
  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      uploadImage(e.target.files[0]);
    }
  };

  return (
    <_.Container>
      <_.SelectCatagoryContainer>
        <label>카테고리</label>
        <Selector
          onChange={(e) => {
            setData({ ...data, category: e.target.value });
          }}
          option={["음악", "영상", "운동", "취미"]}
          value={["MUSIC", "VIDEO", "SPORT", "HOBBy"]}
          selected="MUSIC"
        />
      </_.SelectCatagoryContainer>
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
      {data.image && <img src={data.image} alt="ads" />}
    </_.Container>
  );
}

export default Content;
