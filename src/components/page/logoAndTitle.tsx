import styled from "styled-components";
import logo from "../../assets/logo.svg";

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

interface Props {
  size?: string;
  title: string;
  alignItems: string;
}
export default function LogoAndTitle({
  size = "75px",
  title,
  alignItems = "center",
}: Props) {
  return (
    <LogoAndTitleWrapper size={size} alignItems={alignItems}>
      <img src={logo} alt="clever-real-state-logo" />
      <h1>{title}</h1>
    </LogoAndTitleWrapper>
  );
}
