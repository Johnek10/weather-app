import React, { useContext, useEffect } from "react";
import { WrapperList } from "./CitiesList.styled";
import CityItem from "components/molecules/CityItem/CityItem";
//import { cities } from "data/mockCity";
import { CitiesContext } from "providers/CitiesProvider";

const CitesList = () => {
  const { getAllCities, cities, favouriteCities } = useContext(CitiesContext);
  //const [city, setCity]=([]);

  useEffect(() => {
    getAllCities();
    console.log(cities);
    console.log(favouriteCities);
  }, []);
  return (
    <WrapperList>
      {cities.map(({ name, country }) => {
        return <CityItem name={name} country={country} />;
      })}
    </WrapperList>
  );
};

export default CitesList;
