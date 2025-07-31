import styled from "styled-components";

export const LogoAndTitleWrapper = styled.div<{
  size: string;
  alignItems: string;
}>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: ${({ alignItems }) => alignItems};
  width: 100%;

  img {
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }
`;
