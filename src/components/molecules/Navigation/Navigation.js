import React from 'react';
import Link from 'components/atoms/Link';
import { Wrapper } from './Navigation.styles';

const Navigation = () => {
  const textData = ['Favourites Cities', 'All Cities', 'Actual weather'];
  return (
    <Wrapper>
      {textData.map((data) => (
        <Link text={data}></Link>
      ))}
    </Wrapper>
  );
};

export default Navigation;
