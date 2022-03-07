import React, { useContext, useEffect } from "react";
import { WrapperList } from "./CitiesList.styled";
import CityItem from "components/molecules/CityItem/CityItem";
import { CitiesContext } from "providers/CitiesProvider";

const CitesList = () => {
  const { cities, favouriteCities, time } = useContext(CitiesContext);

  return (
    <WrapperList>
      {cities.map(({ name, sys: { country }, main: { temp, humidity } }) => {
        return (
          <CityItem
            name={name}
            country={country}
            temp={temp}
            humidity={humidity}
          />
        );
      })}
    </WrapperList>
  );
};

export default CitesList;
