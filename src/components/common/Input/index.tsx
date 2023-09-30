import { BodyLarge } from "styles/text";
import * as S from "./style";
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
    <S.Container>
      <S.Label>
        <BodyLarge>{label}</BodyLarge>
      </S.Label>
      <S.Input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
      />
    </S.Container>
  );
}

export default Input;
