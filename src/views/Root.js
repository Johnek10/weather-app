import React from 'react';
import { theme } from 'assets/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import MainTemplate from 'components/templates/MainTemplate';
import { Wrapper } from './Root.styles';
import Navigation from 'components/molecules/Navigation/Navigation';
import WeatherList from 'components/organisms/WeatherIList/WeatherIList';
import WeatherItem from 'components/molecules/WeatherItem/WeatherItem';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <Navigation />
        <WeatherList />
      </MainTemplate>
    </ThemeProvider>
  );
};

export default Root;
