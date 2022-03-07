import React, { useState } from "react";
import { data as coordinates } from "data/mockCity";

export const CitiesContext = React.createContext({
  cities: [],
  favouriteCities: [],
  getAllCities: () => {},
  addCity: () => {},
});

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [favouriteCities, setFavouriteCities] = useState([]);
  const createRequest = () => {
    const request = [];
    for (let {
      coord: { lat, lon },
    } of coordinates) {
      request.push(
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_TOKEN}`
        )
      );
    }
    return request;
  };
  const addCity = (value) => {
    setFavouriteCities([value, ...favouriteCities]);
  };

  const getAllCities = () => {
    const endpoints = createRequest();

    Promise.all(endpoints)
      .then((responses) => {
        return Promise.all(
          responses.map((response) => {
            return response.json();
          })
        );
      })
      .then((data) => {
        setCities(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <CitiesContext.Provider
      value={{
        cities,
        favouriteCities,
        getAllCities,
        addCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

export default CitiesProvider;
