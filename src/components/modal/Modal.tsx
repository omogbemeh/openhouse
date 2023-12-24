import { FC, ReactNode, useEffect } from "react";
import { ModalContentContainer, ModalOverlay } from "./Modal.styles";

interface ModalProps {
  closeModal: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ closeModal, children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const modalClose = () => {
    closeModal();
  };

  return (
    <>
      <ModalOverlay onClick={modalClose}></ModalOverlay>
      <ModalContentContainer>{children}</ModalContentContainer>
    </>
  );
};

export default Modal;
