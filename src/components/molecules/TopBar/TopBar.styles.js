import styled from "styled-components";

export const Wrapper = styled.div`
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 1200px) {
    grid-column-start: 2;
    grid-column-end: 3;
    width: 100%;
    padding: 1.5rem 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  text-transform: uppercase;
  letter-spacing: -2px;
  margin-left: 28rem;
`;
