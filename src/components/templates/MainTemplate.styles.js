import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 80px;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.blue};
  height: 100vh;
  overflow-y: scroll;
  grid-template-rows: 120px 120px 1fr;
`;
