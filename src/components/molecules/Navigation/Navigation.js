import React from "react";
import Link from "components/atoms/Link";
import { Wrapper } from "./Navigation.styles";
import { StyledLink } from "components/atoms/Link.styles";

const Navigation = () => {
  return (
    <Wrapper>
      <StyledLink to="/favourites">Favourites Cities</StyledLink>
      <StyledLink to="/">All Cities</StyledLink>
      <StyledLink to="/weather">Actual weather</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
