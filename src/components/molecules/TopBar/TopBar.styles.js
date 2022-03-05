import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  margin-right: 60px;
`;
