import React from "react";
import { HeaderWrapper } from "./header.styles";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Header = (props: HeaderProps) => {
  return <HeaderWrapper {...props}>Header</HeaderWrapper>;
};
