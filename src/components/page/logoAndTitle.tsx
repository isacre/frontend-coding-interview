import logo from "../../assets/logo.svg";
import { LogoAndTitleWrapper } from "./styles";
import type { Props } from "./types";

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
