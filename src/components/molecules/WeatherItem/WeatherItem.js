import { Button } from 'components/atoms/Button/Button.styles';
import React from 'react';
import {
  Wrapper,
  StyledData,
  StyledHeader,
  StyledInformation,
} from './WeatherItem.styles';

const WeatherItem = ({ city, temp, humidity }) => {
  return (
    <Wrapper>
      <StyledData>
        <StyledHeader>Date</StyledHeader>
        <p>Sunday</p>
        <p>Aug 31th 2022</p>
      </StyledData>
      <StyledInformation>
        <StyledHeader>City</StyledHeader>
        <p>{city}</p>
      </StyledInformation>
      <StyledInformation>
        <StyledHeader>Temperature</StyledHeader>
        <p>{temp}</p>
      </StyledInformation>
      <StyledInformation>
        <StyledHeader>Humidity</StyledHeader>
        <p>{humidity}</p>
      </StyledInformation>
      <Button>Show Chart</Button>
    </Wrapper>
  );
};

export default WeatherItem;
