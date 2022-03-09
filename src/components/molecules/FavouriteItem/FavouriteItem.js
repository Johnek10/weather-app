import React from "react";
import { Wrapper } from "../CityItem/CityItem.styled";

const FavouriteItem = ({ name, country }) => {
  return (
    <Wrapper>
      <p>{name}</p>
      <p>{country}</p>
    </Wrapper>
  );
};

export default FavouriteItem;
