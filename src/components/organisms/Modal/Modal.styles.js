import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 600px;
  min-height: 600px;
  background-color: white;
  border-radius: 20px;

  button {
    border-radius: 10px;
    border-style: none;
    margin-top: 2rem;
    width: 6rem;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.pink};
  }
`;
