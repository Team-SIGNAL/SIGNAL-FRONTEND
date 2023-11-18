import * as _ from "./style";
import { FileInputProps } from "./type";

function FileInput({ label, name, value, onChange }: FileInputProps) {
  return (
    <_.Container>
      <_.Label>{label}</_.Label>
      <input
        type="file"
        name={name}
        accept="image/*"
        value={value}
        onChange={onChange}
      />
    </_.Container>
  );
}

export default FileInput;
