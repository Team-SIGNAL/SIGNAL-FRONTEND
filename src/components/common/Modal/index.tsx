import { useEffect } from "react";
import * as _ from "./style";
import { ModalProps } from "./type";

function Modal({ setModal, children }: ModalProps) {
  useEffect(() => {
    document.body.style.cssText = `overflow: hidden`;
    return () => { document.body.style.cssText = `overflow: auto` }
  }, []);

  return (
    <_.BackDrop
      onClick={() => {
        setModal(false);
      }}
    >
      <_.Container onClick={(e) => e.stopPropagation()}>{children}</_.Container>
    </_.BackDrop>
  );
}

export default Modal;
