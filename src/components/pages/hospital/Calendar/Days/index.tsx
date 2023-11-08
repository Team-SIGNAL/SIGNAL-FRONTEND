import { Title } from "styles/text";
import * as _ from "./style";

function Days() {
  const date = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <_.Contianer>
      <_.DateContainer>
        {date.map((d) => (
          <_.Date>
            <Title>{d}</Title>
          </_.Date>
        ))}
        
      </_.DateContainer>
        <_.Line />
    </_.Contianer>
  );
}

export default Days;
