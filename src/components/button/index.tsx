import { StyledButton } from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
export default function Button({ children, ...props }: Props) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
