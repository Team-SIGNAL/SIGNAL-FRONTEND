import React, { ReactNode } from "react";

export interface ModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
}
