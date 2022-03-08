import { ChartButton } from "components/atoms/Button/Button.styles";
import React, { useEffect, useState } from "react";
import {
  Wrapper,
  StyledData,
  StyledHeader,
  StyledInformation,
} from "./WeatherItem.styles";
import { convertTime } from "assets/utils/helpersFunction";
import { useModal } from "hooks/useModal";
import Chart from "data/Chart";

const InitialData = ({ time, temp }) => {
  const [timeData, setTimeData] = useState([]);
  const [diagramData, setDiagramData] = useState({
    labels: [],
    datasets: [],
  });
  const [temperature, setTemperature] = useState([temp]);

  useEffect(() => {
    const hourMinute = convertTime(time);
    setTimeData([hourMinute]);
  }, []);

  useEffect(() => {
    setDiagramData({
      labels: timeData,
      datasets: [
        {
          label: "Temperature",
          data: temperature,
        },
      ],
    });
  }, [timeData]);

  return (
    <div>
      <p>Temperature</p>
      <Chart chartData={diagramData} />
    </div>
  );
};

const WeatherItem = ({ city, temp, humidity, time }) => {
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
        <p>{temp} °C</p>
      </StyledInformation>
      <StyledInformation>
        <StyledHeader>Humidity</StyledHeader>
        <p>{humidity} %</p>
      </StyledInformation>
      <ChartButton onClick={handleOpenModal}>Show Chart</ChartButton>
      {isOpen ? (
        <Modal handleClose={handleCloseModal}>
          <InitialData time={time} temp={temp} />
        </Modal>
      ) : null}
    </Wrapper>
  );
};

export default WeatherItem;
