import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 114px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  margin-bottom: 2rem;
  p {
    width: 12rem;
  }
`;
