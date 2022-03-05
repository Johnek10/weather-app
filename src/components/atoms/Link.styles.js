import styled from 'styled-components';

export const LinkWrapper = styled.a`
  width: 377px;
  background-color: ${({ theme }) => theme.colors.lightOrange};
  box-sizing: border-box;
  border-radius: 15px;
  padding: 13px 42px;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  font-size: 13px;
  :hover {
    background-color: ${({ theme }) => theme.colors.pink};
  }
`;
