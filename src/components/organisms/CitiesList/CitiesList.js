import React from 'react';
import { WrapperList } from './CitiesList.styled';
import CityItem from 'components/molecules/CityItem/CityItem';
import { cities } from 'data/mockCity';

const CitesList = () => {
  return (
    <WrapperList>
      {cities.map(({ name, country }) => {
        return <CityItem name={name} country={country} />;
      })}
    </WrapperList>
  );
};

export default CitesList;
