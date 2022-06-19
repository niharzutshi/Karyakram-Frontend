import Navbar from "./Navbar";
import React, { PropsWithChildren } from "react";

type HomeLayoutProps = {
  children: any;
};

const HomeLayout: React.FC<PropsWithChildren<HomeLayoutProps>> = ({
  children,
}) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default HomeLayout;
