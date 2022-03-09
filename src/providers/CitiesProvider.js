import React, { useEffect, useState } from "react";
import { data as coordinates } from "data/mockCity";

export const CitiesContext = React.createContext({
  cities: [],
  favouriteCities: [],
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

  useEffect(() => {
    getAllCities();
    const intervalId = setInterval(() => {
      getAllCities();
    }, 60000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        favouriteCities,
        addCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

export default CitiesProvider;
