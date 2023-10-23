import * as _ from "./style";
import { SelecterProps } from "./type";

function Selector({ option, value }: SelecterProps) {
  return (
    <_.Select>
      {option.map((v, idx) => (
        <option value={value[idx]} key={v}>{v}</option>
      ))}
    </_.Select>
  );
}

export default Selector;
