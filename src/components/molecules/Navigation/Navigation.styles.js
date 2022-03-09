import styled from "styled-components";

export const Wrapper = styled.div`
  @media (max-width: 992px) {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 4rem 0 0 0;
`;
