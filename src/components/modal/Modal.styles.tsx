import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 100;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  min-height: 100vh;
  min-width: 100vw;
`;

export const ModalContentContainer = styled.div`
  min-width: 300px;
  max-width: 600px;
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  z-index: 120;
  padding: 23px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 100%;
    display: grid;
    gap: 15px;
  }

  small {
    font-size: 0.75em;
    font-weight: 500;
    color: #c00;
  }

  .input-group {
    display: grid;
    grid-template-columns: 30% 70%;
    gap: 10px;
    align-items: center;
  }

  form label {
    font-size: 1.1em;
  }

  input,
  select {
    font: inherit;
    padding: 6px;
    border: none;
    border: 1px solid #ccc;
    border-radius: 7px;
  }
`;
