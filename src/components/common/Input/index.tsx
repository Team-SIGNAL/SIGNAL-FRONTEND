import { BodyLarge } from "styles/text";
import * as _ from "./style";
import { InputProps } from "./type";

/** placeholder, value, onChange 필수 */
function Input({
  label,
  placeholder,
  onChange,
  type = "string",
  name,
  value,
  enterSpace,
}: InputProps) {
  const onKeyDownEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13 && enterSpace) {
      enterSpace();
    }
  };
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
        onKeyDown={onKeyDownEvent}
      />
    </_.Container>
  );
}

export default Input;
