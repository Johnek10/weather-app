import styled from "styled-components";

export const Wrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  width: 100%;
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  margin-right: 60px;
`;
