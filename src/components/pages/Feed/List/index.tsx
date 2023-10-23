import EachFeed from "../EachFeed";
import * as _ from "./style";

function List() {
  const data = [
    { summary: "", title: "이것은 제목입니다.1", date: "2022.01.20" },
    { summary: "", title: "이것은 제목입니다.2", date: "2022.01.20" },
    { summary: "", title: "이것은 제목입니다.3", date: "2022.01.20" },
    { summary: "", title: "이것은 제목입니다.4", date: "2022.01.20" },
    { summary: "", title: "이것은 제목입니다.5", date: "2022.01.20" },
    { summary: "", title: "이것은 제목입니다.6", date: "2022.01.20" },
    { summary: "", title: "이것은 제목입니다.7", date: "2022.01.20" },
  ];
  return (
    <_.Container>
      {data.map((v) => (
        <EachFeed {...v} />
      ))}
    </_.Container>
  );
}

export default List;
