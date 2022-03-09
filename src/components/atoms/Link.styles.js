import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

const activeClassName = "active-link";

export const StyledLink = styled(LinkRouter).attrs({
  activeClassName,
})`
  width: 377px;
  background-color: ${({ theme }) => theme.colors.lightOrange};
  box-sizing: border-box;
  border-radius: 15px;
  padding: 13px 42px;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: white;
  &.${activeClassName} {
    background-color: red;
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.pink};
  }

  @media (max-width: 992px) {
    margin: 0.5rem;
  }
`;
