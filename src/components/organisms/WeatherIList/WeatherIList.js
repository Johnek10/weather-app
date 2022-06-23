import React, { useState, useEffect, useContext } from "react";
import WeatherItem from "components/molecules/WeatherItem/WeatherItem";
import { WrapperList } from "./WeatherIList.styles";
import { CitiesContext } from "providers/CitiesProvider";
import { convertToCelsius } from "assets/utils/helpersFunction";

const WeatherList = () => {
  const { favouriteCities } = useContext(CitiesContext);

  return (
    <WrapperList>
      {favouriteCities.map(({ name, temp, humidity, dt }, index) => {
        return (
          <WeatherItem
            key={index}
            city={name}
            temp={convertToCelsius(temp)}
            humidity={humidity}
            time={dt}
          />
        );
      })}
    </WrapperList>
  );
};
export default WeatherList;
