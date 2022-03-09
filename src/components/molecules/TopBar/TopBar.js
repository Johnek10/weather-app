import React from "react";
import SignOut from "components/molecules/SignOut/SignOut";
import { Wrapper } from "./TopBar.styles";
import { Title } from "./TopBar.styles";

const TopBar = () => {
  return (
    <Wrapper>
      <Title>Weather App</Title>
      <SignOut />
    </Wrapper>
  );
};

export default TopBar;
