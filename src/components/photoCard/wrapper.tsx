import React from "react";
import styled from "styled-components";

const ComponentWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  overflow: hidden;
  align-items: flex-start;
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export default function Wrapper({ children, ...props }: Props) {
  return <ComponentWrapper {...props}>{children}</ComponentWrapper>;
}
