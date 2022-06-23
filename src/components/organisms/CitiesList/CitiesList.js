import React, { useState, useEffect } from "react";
import { WrapperList } from "./CitiesList.styled";
import CityItem from "components/molecules/CityItem/CityItem";
import { CitiesContext } from "providers/CitiesProvider";
import { data as citiesList } from "data/mockCity";

const CitesList = () => {
  const [cityList, setCityList] = useState(
    citiesList.sort((a, b) => a.id - b.id)
  );
  const [selected, setSelected] = useState([]);
  const [noSelected, setNoSelected] = useState([...citiesList]);

  useEffect(() => {
    console.log("selected change");
    setCityList([...selected, ...noSelected]);
  }, [selected]);

  const handleClick = (idCity, index) => {
    //element is checked before
    if (selected.filter((e) => e.id == idCity).length > 0) {
      const selectedUpdate = selected.filter((e) => e.id != idCity);
      setSelected(selectedUpdate);

      const uncheckedElement = selected.filter((e) => e.id == idCity);
      setNoSelected(
        [...noSelected, ...uncheckedElement].sort((a, b) => {
          return a.id - b.id;
        })
      );

      //element no checked before
    } else {
      const noSelectedUpdate = noSelected.filter((e) => e.id != idCity);
      const checkedElement = noSelected.filter((e) => e.id == idCity);
      console.log(checkedElement);

      console.log(noSelectedUpdate);
      setNoSelected(noSelectedUpdate);
      setSelected([...selected, ...checkedElement]);
    }
  };

  return (
    <WrapperList>
      {cityList.map(({ name, id, country, coord: { lon, lat } }, index) => {
        return (
          <CityItem
            handleClick={() => handleClick(id, index)}
            key={id}
            name={name}
            country={country}
            lon={lon}
            lat={lat}
          />
        );
      })}
    </WrapperList>
  );
};

export default CitesList;
