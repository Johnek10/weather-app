export const convertTime = (time) => {
  const date = new Date(time);
  return `${date.getHours()} : ${date.getMinutes()}`;
};

export const convertToCelsius = (temp) => {
  return Math.round((temp - 273.15) * 100) / 100;
};
