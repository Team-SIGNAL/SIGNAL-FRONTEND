import { BodyLarge } from "styles/text";
import * as _ from "./style";
import { InputProps } from "./type";

function Input({
  label,
  onChange,
  type = "string",
  placeholder,
  name,
  value,
}: InputProps) {
  return (
    <_.Container>
      <_.Label>
        <BodyLarge>{label}</BodyLarge>
      </_.Label>
      <_.Input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
      />
    </_.Container>
  );
}

export default Input;
