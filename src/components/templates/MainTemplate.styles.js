import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 80px 1fr 80px;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    grid-template-rows: 120px 120px 1fr;
  }
`;
