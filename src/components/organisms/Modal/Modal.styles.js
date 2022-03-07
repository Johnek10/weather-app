import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 600px;
  min-height: 600px;
  background-color: white;
  border-radius: 20px;
`;
