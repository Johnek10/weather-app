import { useState } from "react";
import Modal from "components/organisms/Modal/Modal";

export const useModal = (initialState = false) => {
  const [isOpen, setOpenModal] = useState(initialState);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return {
    Modal,
    handleOpenModal,
    handleCloseModal,
    isOpen,
  };
};
