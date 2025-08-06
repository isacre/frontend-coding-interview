import React from "react";
import { ComponentWrapper } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export default function Wrapper({ children, ...props }: Props) {
  return <ComponentWrapper {...props}>{children}</ComponentWrapper>;
}
