import React, { useEffect, useState } from "react";
import { data as coordinates } from "data/mockCity";

export const CitiesContext = React.createContext({
  citiesCheckedCoord: [],
  addCity: () => {},
});

const CitiesProvider = ({ children }) => {
  const [citiesCheckedCoord, setCitiesCheckedCoord] = useState([]); //retrieve coordinates from checked cities

  const addCity = (value) => {
    setCitiesCheckedCoord([...citiesCheckedCoord, value]);
  };
  /* 
  useEffect(() => {
    console.log(citiesCheckedCoord);
  }); */

  return (
    <CitiesContext.Provider
      value={{
        citiesCheckedCoord,
        addCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

export default CitiesProvider;
