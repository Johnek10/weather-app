import { theme } from 'assets/theme';
import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 114px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  margin-bottom: 2rem;
`;

export const StyledData = styled.div`
  width: 180px;

  p {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
  p:last-child {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.smallOne};
  }
  p:first-child {
    font-weight: 200;
    font-size: ${({ theme }) => theme.fontSize.smallOne};
  }
`;

export const StyledInformation = styled.div`
  width: 180px;
  padding: 20px;
`;
export const StyledHeader = styled.p`
  font-weight: 200;
  font-size: ${({ theme }) => theme.fontSize.smallOne};
`;
