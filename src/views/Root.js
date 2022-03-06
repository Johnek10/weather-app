import React from 'react';
import { theme } from 'assets/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import MainTemplate from 'components/templates/MainTemplate';
import { Wrapper } from './Root.styles';
import Navigation from 'components/molecules/Navigation/Navigation';
import WeatherList from 'components/organisms/WeatherIList/WeatherIList';
import TopBar from 'components/molecules/TopBar/TopBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cities from './Cities';

const Root = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <TopBar />
          <Navigation />
          <Routes>
            <Route path="/" element={<WeatherList />}></Route>
            <Route path="/cities" element={<Cities />}></Route>
          </Routes>
        </MainTemplate>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
