import styled from 'styled-components';

export const Button = styled.button`
  width: 300px;
  height: 43px;
  border-radius: 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.pink};
  color: #ffff;
  font-size: 0.7rem;
`;
