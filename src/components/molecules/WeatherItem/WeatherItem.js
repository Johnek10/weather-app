import { ChartButton } from "components/atoms/Button/Button.styles";
import React from "react";
import {
  Wrapper,
  StyledData,
  StyledHeader,
  StyledInformation,
} from "./WeatherItem.styles";
import { useModal } from "hooks/useModal";

const InitialData = ({ temp, humidity }) => {
  return (
    <div>
      <p>{temp}</p>
      <p>{humidity}</p>
    </div>
  );
};

const WeatherItem = ({ city, temp, humidity }) => {
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();
  return (
    <Wrapper>
      <StyledData>
        <StyledHeader>Date</StyledHeader>
        <p>Sunday</p>
        <p>Aug 31th 2022</p>
      </StyledData>
      <StyledInformation>
        <StyledHeader>City</StyledHeader>
        <p>{city}</p>
      </StyledInformation>
      <StyledInformation>
        <StyledHeader>Temperature</StyledHeader>
        <p>{temp}</p>
      </StyledInformation>
      <StyledInformation>
        <StyledHeader>Humidity</StyledHeader>
        <p>{humidity}</p>
      </StyledInformation>
      <ChartButton onClick={handleOpenModal}>Show Chart</ChartButton>
      {isOpen ? (
        <Modal handleClose={handleCloseModal}>
          <InitialData temp={temp} humidity={humidity} />
        </Modal>
      ) : null}
    </Wrapper>
  );
};

export default WeatherItem;
