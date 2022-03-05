import React from 'react';
import WeatherItem from 'components/molecules/WeatherItem/WeatherItem';
import { data } from 'data/mockCity';
import { WrapperList } from './WeatherIList.styles';
const WeatherList = () => {
  return (
    <WrapperList>
      {data.map(({ city, temperature, humidity }, index) => {
        return (
          <WeatherItem
            key={index}
            city={city}
            temp={temperature}
            humidity={humidity}
          />
        );
      })}
    </WrapperList>
  );
};
export default WeatherList;
