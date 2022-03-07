import React, { useContext } from "react";
import { CitiesContext } from "providers/CitiesProvider";
import { WrapperList } from "../CitiesList/CitiesList.styled";
import CityItem from "components/molecules/CityItem/CityItem";

const FavouritesList = () => {
  const { favouriteCities } = useContext(CitiesContext);

  return (
    <WrapperList>
      {favouriteCities.map(({ name, country }) => {
        return <CityItem name={name} country={country} />;
      })}
    </WrapperList>
  );
};

export default FavouritesList;
