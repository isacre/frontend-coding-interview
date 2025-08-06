import styled from "styled-components";

export const Wrapper = styled.div<{ height: number; width: number }>`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  min-width: ${({ width }) => width}px;
  min-height: ${({ height }) => height}px;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const FakeCard = styled.div<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  min-width: ${({ width }) => width}px;
  min-height: ${({ height }) => height}px;
  border-radius: 10px;
  background-color: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0;
`;
