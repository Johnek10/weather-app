import React, { useState, useEffect, useContext } from "react";
import WeatherItem from "components/molecules/WeatherItem/WeatherItem";
import { WrapperList } from "./WeatherIList.styles";
import { CitiesContext } from "providers/CitiesProvider";

const WeatherList = () => {
  const { favouriteCities } = useContext(CitiesContext);

  return (
    <WrapperList>
      {favouriteCities.map(({ name, temp, humidity }, index) => {
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
