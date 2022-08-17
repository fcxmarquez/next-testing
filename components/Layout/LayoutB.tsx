import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export const LayoutB: React.FC<LayoutProps> = ({ children }) => {
  /* Return the context needed */

  return (
    <>
      <Header style={{ backgroundColor: "red" }} />
      {children}
      <Footer style={{ backgroundColor: "red" }} />
    </>
  );
};
