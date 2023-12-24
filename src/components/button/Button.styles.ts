import styled from "styled-components";

export const ButtonContainer = styled.button<{ background?: string }>`
  padding: 8px;
  border: none;
  border-radius: 5px;
  border: 1px solid #e47b2d;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font: inherit;
  background: ${({ background }) => (background ? background : "#08687d")};
  color: #fff;
  font-weight: 500;

  &:hover {
    background: #fff;
    color: #000;
  }
`;
