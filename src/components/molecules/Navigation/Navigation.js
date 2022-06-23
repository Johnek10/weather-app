import React from "react";
import { Wrapper } from "./Navigation.styles";
import { StyledLink } from "components/atoms/Link.styles";

const Navigation = () => {
  return (
    <Wrapper>
      <StyledLink to="/">Cities</StyledLink>
      <StyledLink to="/weather">Actual weather</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
