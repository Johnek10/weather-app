import React from "react";
import { theme } from "assets/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import MainTemplate from "components/templates/MainTemplate";
import Navigation from "components/molecules/Navigation/Navigation";
import WeatherList from "components/organisms/WeatherIList/WeatherIList";
import TopBar from "components/molecules/TopBar/TopBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cities from "./Cities";
import CitiesProvider from "providers/CitiesProvider";
import Favourites from "./Favourites";
import Login from "./Login";
import { AuthProvider } from "providers/AuthProvider";

const Root = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <AuthProvider>
            <CitiesProvider>
              <TopBar />
              <Navigation />
              <Routes>
                <Route path="/" element={<Cities />}></Route>
                <Route path="/weather" element={<WeatherList />}></Route>
                <Route path="/favourites" element={<Favourites />}></Route>
              </Routes>
            </CitiesProvider>
          </AuthProvider>
        </MainTemplate>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
