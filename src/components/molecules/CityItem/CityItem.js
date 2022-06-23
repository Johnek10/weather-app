import React, { useContext, useState, useEffect } from "react";
import { Wrapper } from "./CityItem.styled";
import CitiesProvider, { CitiesContext } from "providers/CitiesProvider";

const CityItem = ({ name, country, handleClick }) => {
  const { addCity } = useContext(CitiesContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper
      onClick={() => {
        handleClick();
        setIsOpen(!isOpen);
      }}
      isOpen={isOpen}
    >
      <p>{name}</p>
      <p>{country}</p>
    </Wrapper>
  );
};

export default CityItem;
