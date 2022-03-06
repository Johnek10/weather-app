import React from 'react';
import AddButton from 'components/atoms/AddButton/AddButton';
import { Wrapper } from './CityItem.styled';

const CityItem = ({ name, country }) => (
  <Wrapper>
    <p>{name}</p>
    <p>{country}</p>
    <AddButton />
  </Wrapper>
);

export default CityItem;
