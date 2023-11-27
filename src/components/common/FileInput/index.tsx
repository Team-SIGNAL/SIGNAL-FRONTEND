import * as _ from "./style";
import { FileInputProps } from "./type";

function FileInput({ label, name, onChange }: FileInputProps) {
  return (
    <_.Container>
      <_.Label>{label}</_.Label>
      <input
        type="file"
        name={name}
        accept="image/*"
        onChange={onChange}
      />
    </_.Container>
  );
}

export default FileInput;
