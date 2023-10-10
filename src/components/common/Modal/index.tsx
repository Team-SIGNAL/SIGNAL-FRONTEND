import { useEffect } from "react";
import * as S from "./style";
import { ModalProps } from "./type";

function Modal({ setModal, children }: ModalProps) {
  useEffect(() => {
    document.body.style.cssText = `overflow: hidden`;
    return () => { document.body.style.cssText = `overflow: auto` }
  }, []);

  return (
    <S.BackDrop
      onClick={() => {
        setModal(false);
      }}
    >
      <S.Container onClick={(e) => e.stopPropagation()}>{children}</S.Container>
    </S.BackDrop>
  );
}

export default Modal;
