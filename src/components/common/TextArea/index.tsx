import * as _ from "./style";
import { TextAreaProps } from "./type";
import { BodyLarge } from "styles/text";

function TextArea({
  label,
  placeholder,
  name,
  value,
  onChange,
}: TextAreaProps) {
  return (
    <_.Container>
      <_.Container>
        <_.Label>
          <BodyLarge>{label}</BodyLarge>
        </_.Label>
        <_.Input
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          value={value}
        />
      </_.Container>
    </_.Container>
  );
}

export default TextArea;
