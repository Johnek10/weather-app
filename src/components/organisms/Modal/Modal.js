import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const modalConteiner = document.getElementById("modal-container");

import { ModalWrapper } from "./Modal.styles";

const Modal = ({ handleClose, children }) => {
  const modalNode = document.createElement("div");

  useEffect(() => {
    modalConteiner.appendChild(modalNode);

    return () => {
      modalConteiner.removeChild(modalNode);
    };
  }, [modalNode]);
  return ReactDOM.createPortal(
    <ModalWrapper>
      {children}
      <button onClick={handleClose}>Close</button>
    </ModalWrapper>,
    modalNode
  );
};

export default Modal;
