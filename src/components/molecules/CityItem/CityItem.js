import React, { useContext } from "react";
import AddButton from "components/atoms/AddButton/AddButton";
import { Wrapper } from "./CityItem.styled";
import { CitiesContext } from "providers/CitiesProvider";
import { AddButtonStyle } from "components/atoms/AddButton/AddButton.styled";
import { ReactComponent as AddIcon } from "assets/icons/Add_icon.svg";

const CityItem = ({ name, country, temp, humidity }) => {
  const { addCity } = useContext(CitiesContext);

  return (
    <Wrapper>
      <p>{name}</p>
      <p>{country}</p>
      <AddButtonStyle
        onClick={() => addCity({ name, country, temp, humidity })}
      >
        <AddIcon />
      </AddButtonStyle>
    </Wrapper>
  );
};

export default CityItem;
