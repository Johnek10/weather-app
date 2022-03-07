import React from "react";
import { ReactComponent as AddIcon } from "assets/icons/Add_icon.svg";
import { AddButtonStyle } from "./AddButton.styled";

const AddButton = () => {
  return (
    <AddButtonStyle>
      <AddIcon />
    </AddButtonStyle>
  );
};

export default AddButton;
