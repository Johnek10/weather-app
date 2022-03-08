import React, { useContext, useEffect } from "react";
import { WrapperList } from "./CitiesList.styled";
import CityItem from "components/molecules/CityItem/CityItem";
import { CitiesContext } from "providers/CitiesProvider";

const CitesList = () => {
  const { cities, favouriteCities } = useContext(CitiesContext);

  return (
    <WrapperList>
      {cities.map(
        ({ name, dt, sys: { country }, main: { temp, humidity } }) => {
          return (
            <CityItem
              name={name}
              country={country}
              temp={temp}
              humidity={humidity}
              dt={dt}
            />
          );
        }
      )}
    </WrapperList>
  );
};

export default CitesList;
