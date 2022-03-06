import React from 'react';
import Link from 'components/atoms/Link';
import { Wrapper } from './Navigation.styles';
import { Link as LinkRouter } from 'react-router-dom';

const Navigation = () => {
  return (
    <Wrapper>
      <LinkRouter to="/favourites">
        <Link text={'Favourites Cities'}></Link>
      </LinkRouter>
      <LinkRouter to="/cities">
        <Link text={'All Cities'}></Link>
      </LinkRouter>
      <LinkRouter to="/">
        <Link text={'Actual weather'}></Link>
      </LinkRouter>
    </Wrapper>
  );
};

export default Navigation;
