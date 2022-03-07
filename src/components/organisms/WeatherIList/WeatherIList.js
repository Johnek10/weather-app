import React, { useState, useEffect, useContext } from "react";
import WeatherItem from "components/molecules/WeatherItem/WeatherItem";
import { WrapperList } from "./WeatherIList.styles";
import { CitiesContext } from "providers/CitiesProvider";
import { data } from "data/mockCity";

const WeatherList = () => {
  const { getData } = useContext(CitiesContext);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    //getData();
    // const endpoints = createRequest();
    /*    Promise.all(endpoints)
      .then((responses) => {
        return Promise.all(
          responses.map(function (response) {
            return response.json();
          })
        );
      })
      .then((data) => {
        setCities(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      }); */
  }, []);

  return (
    <WrapperList>
      {cities.map(({ name, main: { temp, humidity } }, index) => {
        return (
          <WeatherItem
            key={index}
            city={name}
            temp={temp}
            humidity={humidity}
          />
        );
      })}
    </WrapperList>
  );
};
export default WeatherList;
