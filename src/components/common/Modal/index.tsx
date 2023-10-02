import * as S from "./style";
import { ModalProps } from "./type";

function Modal({setModal, children}:ModalProps) {
  return (
    <S.BackDrop onClick={()=>{
      setModal(false)
    }}>
      <S.Container>{children}</S.Container>
    </S.BackDrop>
  );
}

export default Modal;
