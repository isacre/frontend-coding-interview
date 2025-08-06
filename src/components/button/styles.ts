import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #0075eb;
  width: 100%;
  font-family: Helvetica;
  font-weight: 700;
  font-style: Bold;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: white;
  outline: none;
  border: none;
  padding: 13px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    pointer-events: none;
  }
`;
