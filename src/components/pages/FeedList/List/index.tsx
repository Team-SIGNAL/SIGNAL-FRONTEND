import EachFeed from "../EachFeed";
import * as _ from "./style";

function List() {
  const data = [
    { img: "", title: "이것은 제목입니다.1", date: "2022.01.20",user:"글쓴이", id:1 },
    { img: "", title: "이것은 제목입니다.2", date: "2022.01.20",user:"글쓴이", id:3 },
    { img: "", title: "이것은 제목입니다.3", date: "2022.01.20",user:"글쓴이", id:2 },
    { img: "", title: "이것은 제목입니다.4", date: "2022.01.20",user:"글쓴이", id:4 },
    { img: "", title: "이것은 제목입니다.5", date: "2022.01.20",user:"글쓴이", id:5 },
    { img: "", title: "이것은 제목입니다.6", date: "2022.01.20",user:"글쓴이", id:6 },
    { img: "", title: "이것은 제목입니다.7", date: "2022.01.20",user:"글쓴이", id:7 },
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
