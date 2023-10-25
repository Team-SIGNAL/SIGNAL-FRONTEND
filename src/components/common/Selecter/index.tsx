import * as _ from "./style";
import { SelecterProps } from "./type";

function Selector({ option, value, onChange }: SelecterProps) {
  return (
    <_.Select onChange={onChange}>
      {option.map((v, idx) => (
        <option value={value[idx]} key={v}>{v}</option>
      ))}
    </_.Select>
  );
}

export default Selector;
