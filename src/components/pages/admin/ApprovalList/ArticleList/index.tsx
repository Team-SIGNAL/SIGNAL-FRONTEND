import * as _ from "./style";
import { Body2, BodyLarge2 } from "styles/text";
// import { approvalList } from "types/poop/approval.type";
import { useNavigate } from "react-router-dom";

function ArticleList({
  id,
  name,
  phone,
}: {
  id: string;
  name: string;
  phone: string;
}) {
  const nav = useNavigate();

  return (
    <_.Container onClick={() => nav("/admin/2")}>
      <_.InfoContainer>
        <BodyLarge2>{name}</BodyLarge2>
        <Body2>{phone}</Body2>
      </_.InfoContainer>
    </_.Container>
  );
}

export default ArticleList;
