import React from "react";
import { FooterWrapper } from "./footer.style";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Footer: React.FC<FooterProps> = (props) => {
  return <FooterWrapper {...props}>Footer</FooterWrapper>;
};
