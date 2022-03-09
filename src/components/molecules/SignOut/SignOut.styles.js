import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 56px;
  width: 286px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.lightOrange};
  display: flex;

  align-items: center;
  p {
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: 600;
    width: fit-content;
  }
  svg:first-child {
    margin-right: 10px;
  }
  svg:last-child {
    margin-left: 135px;
  }
`;
