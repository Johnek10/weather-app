import React, { useContext } from "react";
import { CitiesContext } from "providers/CitiesProvider";
import { WrapperList } from "../CitiesList/CitiesList.styled";
import FavouriteItem from "components/molecules/FavouriteItem/FavouriteItem";

const FavouritesList = () => {
  const { favouriteCities } = useContext(CitiesContext);

  return (
    <WrapperList>
      {favouriteCities.map(({ name, country }) => {
        return <FavouriteItem name={name} country={country} />;
      })}
    </WrapperList>
  );
};

export default FavouritesList;
